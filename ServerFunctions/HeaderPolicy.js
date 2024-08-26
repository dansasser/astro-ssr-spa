const HeaderPolicy = (nonce, production) =>
   !production
      ? {
           'Cache-Control': 'public, max-age=3600',
           'X-Powered-By': 'Sasser Development LLC',
           'X-Frame-Options': 'SAMEORIGIN',
           'X-XSS-Protection': '1; mode=block',
           'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
           'Referrer-Policy': 'no-referrer-when-downgrade'
        }
      : {
           'Cache-Control': 'public, max-age=3600',
           'X-Content-Type-Options': 'nosniff',
           'X-Powered-By': 'Sasser Development LLC',
           'X-Frame-Options': 'SAMEORIGIN',
           'X-XSS-Protection': '1; mode=block',
           'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
           'Referrer-Policy': 'no-referrer-when-downgrade',
           'Content-Security-Policy': `default-src 'self'; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/gh/dansasser/ https://cdn.jsdelivr.net/combine/gh/dansasser/ https://fonts.googleapis.com/ https://unpkg.com/ ; img-src 'self' https://citypackz.com/ data:; font-src 'self' https://cdn.jsdelivr.net/gh/dansasser/ https://cdn.jsdelivr.net/combine/gh/dansasser/ https://fonts.gstatic.com/; connect-src 'self'; media-src 'self'; object-src 'none'; frame-src 'self' https://www.google.com; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; manifest-src 'self'; worker-src 'self'; upgrade-insecure-requests; block-all-mixed-content; report-uri /csp-report-endpoint/; script-src 'self' 'unsafe-hashes' 'nonce-${nonce}' https://cdn.jsdelivr.net/gh/dansasser/ https://cdn.jsdelivr.net/combine/gh/dansasser/ https://unpkg.com;`,
           'Expect-CT':
              "max-age=86400, enforce, report-uri='/csp-report-endpoint/'",
           'Report-To':
              '{ "group": "csp-endpoint", "max_age": 10886400, "endpoints": [{ "url": "/csp-report-endpoint/" }] }',
           NEL: '{ "report_to": "csp-endpoint", "max_age": 10886400, "include_subdomains": true }'
        }

export { HeaderPolicy }
