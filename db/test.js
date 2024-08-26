import Data from './pages.json' assert { type: 'json' };
const pages = Data.pages;

pages.map((page) => {
    if (page.parent === "none") {
        if(page.hasChildren === true){
                console.group(page.name);
            pages.map((child) => {
                if(child.parent === page.name){
                    console.log(child.name);
                }
            });
                console.groupEnd();
        }else{
            console.log(page.name);
        }
    }
});