export type SiteData = [{
    _id: string
    id: string
    name: string
    host: string
    url: string
    email: string
    header: string
    subHeader: string
    desc: string
    owner: string
    author: string
    phone: string
    address: Address
    adminLinks: AdminLink[]
  }];
  
  export type Address = {
    line1: string
    line2: string
    city: string
    state: string
    country: string
    postal_code: string
    _id: string
  };
  
  export type AdminLink = {
    text: string
    url: string
    type: string
    catagory: string
  };
  
