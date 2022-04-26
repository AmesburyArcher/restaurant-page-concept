import { pageLoad } from "./pageLoad";

function createHTMLElement(type, id, classes, content) {
    const element = document.createElement(type);
    
    if(id) {
        element.setAttribute('id', id);
    }
    if(classes) {
        classes.forEach((myClass) => element.classList.add(myClass));
    };
    if(content) {
        element.textContent = content;
    }

    return element;
};

const container = document.querySelector('#content')

// function addNavListeners() {
//     const homeBtn = document.querySelector('#home');
//     const menuBtn = document.querySelector('#menu');
//     const infoBtn = document.querySelector('#info');

//     homeBtn.addEventListener('click', loadHome);
//     menuBtn.addEventListener('click', loadMenu);
//     infoBtn.addEventListener('click', loadInfo);
// };

function renderPage() {
    // addNavListeners();
    pageLoad();
    // loadHome();
};

renderPage();

export { createHTMLElement, 
    container
}