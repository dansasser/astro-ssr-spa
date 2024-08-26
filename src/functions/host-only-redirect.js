export function Redirect(Astro){
    const host = 'http://'+Object.fromEntries(Astro.request.headers)['host']+'/'
    const referer = Object.fromEntries(Astro.request.headers)['referer']
    if(host != referer)
        return Astro.redirect('/')
  }