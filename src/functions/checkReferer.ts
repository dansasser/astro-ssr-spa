// checkReferer.ts
import "dotenv/config";

export function getPage(Astro: any): string | void {
  const referer: string = Object.fromEntries(Astro.request.headers)["referer"];
  const host: string = Astro.url.host;

  if (referer === undefined) {
    Astro.redirect("/");
    return;
  } else {
    if (!referer.includes(host)) {
      Astro.redirect("/");
      return;
    }
  }

  return Astro.url.pathname.replace("/content/", "");
}
