import 'dotenv/config'
export async function getData(url = '', JWT = '', additionalHeaders = '') {
   // Default options are marked with *
   const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
         'Content-Type': 'application/json',
         'X-API-KEY': process.env.X_API_KEY || '',
         DOMAIN: process.env.DOMAIN || '',
         Authorization: `Bearer ${JWT}`,
         ...additionalHeaders, // Ensure additionalHeaders is an object of strings
       },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
   })
   return response.json() // parses JSON response into native JavaScript objects
}

/* This is how to call it
postData("POST", "https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});*/
