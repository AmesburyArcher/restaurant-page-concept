import { pageLoad, pageLoadFooter } from "./pageLoad";
import { loadMenu } from './menu';
import { loadHome } from './home';
import { loadInfo } from './info';

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

function loadInfoPage() {
    container.innerHTML = '';
    pageLoad();
    loadInfo();
    pageLoadFooter();
}

renderPage();


export { createHTMLElement, 
    container,
    loadHomePage,
    loadMenuPage,
    loadInfoPage,
}