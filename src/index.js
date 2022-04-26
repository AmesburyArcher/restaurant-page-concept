import { pageLoad, pageLoadFooter } from "./pageLoad";
import { loadMenu } from './menu';
import { loadHome } from './home';

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

//     homeBtn.addEventListener('click', loadHomePage);
//     menuBtn.addEventListener('click', loadMenuPage);
//     // infoBtn.addEventListener('click', loadInfoPage);
// };

function renderPage() {
    pageLoad();
    loadHome();
    pageLoadFooter();
};

function loadHomePage() {
    container.innerHTML = '';
    pageLoad();
    loadHome();
    pageLoadFooter();
}

function loadMenuPage() {
    container.innerHTML = '';
    pageLoad();
    loadMenu();
    pageLoadFooter();
}

renderPage();


export { createHTMLElement, 
    container,
    loadHomePage,
    loadMenuPage,
    renderPage
}