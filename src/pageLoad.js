import { createHTMLElement, container } from "./index";

function pageLoad() {
    const header = createHTMLElement('div', 'header', null, null);

    const directoryLinks = createHTMLElement('ul', null, ['directory'], null);
    const homeLink = createHTMLElement('li', null, ['directory-link'], 'Home');
    const menuLink = createHTMLElement('li', null, ['directory-link'], 'Menu');
    const infoLink = createHTMLElement('li', null, ['directory-link'], 'Information');

    directoryLinks.appendChild(homeLink);
    directoryLinks.appendChild(menuLink);
    directoryLinks.appendChild(infoLink);
    header.appendChild(directoryLinks);

    const footer = createHTMLElement('div', 'footer', null, "Created by AmesburyArcher 2022");

    container.appendChild(header);
    container.appendChild(footer);
}

export { pageLoad };