
import type { AstroGlobal } from "astro";
import type { SiteData, Address } from "../../types/SiteData";
export async function getSitedata(Astro: AstroGlobal) {
    const siteData = (Astro.locals as { siteData?: SiteData }).siteData ?? [{
       id: "null",
       name: "name",
       host: "host",
       url: "url",
       email: "email",
       header: "header",
       subHeader: "sub header",
       desc: "description",
       owner: "owner",   
       address: {
          line1: "line1",
          line2: "line2",
          city: "city",
          state: "state",
          zip: "zip code",
          country: "country",
       } as unknown as Address,
       phone: "phone"
    }];
    return siteData?.[0];
 }