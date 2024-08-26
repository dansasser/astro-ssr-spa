import type { MiddlewareHandler } from "astro";
import { defineMiddleware } from "astro/middleware";
import { Logger } from "../../lib/Logger.js";
const userId = import.meta.env.USERID;
const pswd = import.meta.env.PASSWORD;
export const auth: MiddlewareHandler =
   defineMiddleware((context, next) => {
      const logBadRequest = () => {
         Logger(
            0,
            `Auth Middleware BAD REQUEST`,
            "ERROR"
         );
      };

      const sendBadRequestResponse = () => {
         logBadRequest();
         return new Response("Auth required", {
            status: 401,
            headers: {
               "WWW-authenticate":
                  'Basic realm="Secure Area"',
            },
         });
      };

      const basicAuth =
         context.request.headers.get(
            "authorization"
         );
      if (!basicAuth) {
         return sendBadRequestResponse();
      }

      const authValue = basicAuth.split(" ")[1];
      const [user, pwd] =
         atob(authValue).split(":");

      if (
         context.request.headers.get("hx-boosted")
      ) {
      }

      if (user === userId && pwd === pswd) {
         return next();
      } else {
         console.log(`${user}=${userId}&${pwd}=${pswd}`)
         return sendBadRequestResponse();
      }
   });
