import { createHTMLElement, container, loadHomePage, loadMenuPage, loadInfoPage } from "./index";

function pageLoad() {
    const header = createHTMLElement('div', 'header', null, null);

    const title = createHTMLElement('h1', null, ['title'], 'Allo Eatery')
    const directoryLinks = createHTMLElement('ul', null, ['directory'], null);
    const homeLink = createHTMLElement('li', null, ['directory-link'], 'Home');
    const menuLink = createHTMLElement('li', null, ['directory-link'], 'Menu');
    const infoLink = createHTMLElement('li', null, ['directory-link'], 'Information');

    homeLink.addEventListener('click', loadHomePage);
    menuLink.addEventListener('click', loadMenuPage);
    infoLink.addEventListener('click', loadInfoPage);

    directoryLinks.appendChild(homeLink);
    directoryLinks.appendChild(menuLink);
    directoryLinks.appendChild(infoLink);
    header.appendChild(title);
    header.appendChild(directoryLinks);

    container.appendChild(header);
}

function pageLoadFooter() {
    const footer = createHTMLElement('div', 'footer', null, "Created by AmesburyArcher 2022");
    container.appendChild(footer);

}

export { pageLoad, pageLoadFooter };