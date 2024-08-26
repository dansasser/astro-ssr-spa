import express from 'express'
import session from 'express-session'
import { Helper } from './lib/helper.js'
import MongoStore from 'connect-mongo'
session
import { handler as ssrHandler } from './dist/server/entry.mjs'
import 'dotenv/config'
import { HeaderPolicy } from './lib/HeaderPolicy.js'
import { DateTime } from './lib/DateTime.js'
import { ExpressStarted } from './lib/ExpressStarted.js'
import { Logger } from './lib/Logger.js'
import bodyParser from 'body-parser'
import crypto from 'crypto'
const nonce = () => crypto.randomBytes(16).toString('hex')
const myNonce = nonce()
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({
   extended: true
})
const port = process.env.PORT
const app = express()
app.use(express.raw({ type: '*/*', limit: '10mb' }))
const getCurrentDateTime = DateTime()
ExpressStarted(getCurrentDateTime, port)
app.use(
   session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      touchAfter: 24 * 3600,
      cookie: {
         sameSite: 'strict',
         secure: 'auto'
      },
      store: new MongoStore({
         mongoUrl: process.env.MONGOLOCAL, //this is set to a local mongodb since it is just session storage
         ttl: 30 * 60, //30m minute session set
         autoRemove: 'native'
      })
   })
)
const base = '/'
app.use(base, express.static('dist/client/'))
app.get('/*.*', function (req, res) {
   var options = url.parse(req.url, true)

   var mime = Helper.getMime(options)

   serveFile(res, options.pathname, mime)
})
app.use((req, res, next) => {
   const headers = HeaderPolicy(myNonce, true)
   Object.entries(headers).forEach(([key, value]) => {
      res.setHeader(key, value)
   })
   Logger(req, 'REQUEST', 'TRAFFIC')
   next()
})
app.use(async (req, res, next) => {
   req.session.currentTime = getCurrentDateTime

   if (req.query && req.query.page) {
      req.session.page = req.query.page
   }
   const url = `${process.env.API}site_data/init/`
   const options = {
      method: 'GET',
      headers: {
         'X-API-KEY': process.env.API_KEY,
         domain: process.env.HOST
      }
   }

   app.use(urlencodedParser)
   app.use(jsonParser)
   app.post('/csp-report-endpoint/', (req, res) => {
      console.log()
      const rawBody = req.body
      const body = JSON.parse(rawBody.toString('utf-8'))['csp-report']
      const report = {
         message: 'csp-report',
         currentTime: getCurrentDateTime,
         'document-uri': body['document-uri'],
         'blocked-uri': body['blocked-uri'],
         'violated-directive': body['violated-directive'],
         'effective-directive': body['effective-directive'],
         'original-policy': body['original-policy'],
         referrer: body['referrer'],
         'script-sample': body['script-sample'],
         disposition: body['disposition'],
         'source-file': body['source-file'],
         'line-number': body['line-number'],
         'column-number': body['column-number'],
         'status-code': body['status-code'],
         'status-text': body['status-text']
      }
      console.log({ report })
      Logger(req, JSON.stringify(report), 'CSP')
      res.send(report)
   })
   if (!locals) {
      Logger(req, 'SiteData Fetch', 'TRAFFIC')
      try {
         const res = await fetch(url, options)
         const siteData = await res.json()
         var locals = {
            title: process.env.SITENAME,
            tagline: process.env.TAGLINE,
            sessionStore: req.session,
            siteData: siteData,
            page: req.session.page || 'home', // use the session value or default to 'home'
            nonce: myNonce
         }
      } catch (err) {
         console.log(err)
      }
   }
   console.log({ localPageState: locals.page })
   ssrHandler(req, res, next, locals)
})
app.get('/:page', (req, res, next) => {
   console.log({ page: req.url })
   if (req.params.page === 'logout' || req.params.page === 'favicon.ico') {
      next()
   } else if (req.params.page === '404') {
      if (
         req.headers.referer != undefined &&
         req.headers.referer.includes(req.headers.host)
      ) {
         res.send(`
         <div id="error" style="width:100%;font-size:32px;font-weight:700;text-align:center;border:solid black;border-left:1px;border-right:1px;">
           <h1>404 <br /> Page not found</h1>
         </div> 
         `)
      } else {
         res.redirect('/')
      }
   } else if (req.params.page === 'logIn' && req.session.user != undefined) {
      res.redirect('/')
   } else {
      res.redirect('/?page=' + req.params.page)
   }
})
const server = app.listen(port)
process.on('SIGINT', () => {
   console.log('Gracefully shutting down from SIGINT (Ctrl+C)');
   server.close(() => {
      console.log('Server closed');
      process.exit(0);
   });
});

process.on('SIGTERM', () => {
   console.log('Gracefully shutting down from SIGTERM');
   server.close(() => {
      console.log('Server closed');
      process.exit(0);
   });
});
