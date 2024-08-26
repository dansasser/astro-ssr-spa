// the following imports are for the page list in the navigation and should be intergrated into the a mongodb database instead of a json file
import Pages from "../../db/pages.json";
 
type Page = {
  id: number;
  name: string;
  url: string;
  title: string;
  description: string;
  keywords: string;
  parent: string;
  hasChildren: boolean;
  icon: string;
};

const pageLoader = (page: string): Page => {
  const pageData = (Pages.pages as Page[]).filter((item) => item.name === page);
  return pageData[0];
};

const getPageDetails = (page: string = "home") => {
  const { description, keywords, name, id, url } = pageLoader(page);
  console.log({ page });
  const hx_get = page ? `/content/${page}` : `/content/home`;
  let hx_url = `/`;
  if (page && page != "home") {
    hx_url = `/${page}`;
    hx_url = hx_url != '/home' ? hx_url : '/';
  }
  return { description, keywords, name, id, url, hx_get, hx_url };
};

export { pageLoader, getPageDetails };
