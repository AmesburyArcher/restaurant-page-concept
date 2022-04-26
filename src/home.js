import { createHTMLElement, container } from "./index";

function loadHome() {
    const homeContainer = createHTMLElement('div', 'home-container', null, null);

    const homeTitle = createHTMLElement('div', null, ['home-title'], 'Welcome to Allo Eatery');
    const homeSubtitle = createHTMLElement('div', null, ['home-subtitle'], 'A Taste of Italy');

    homeContainer.appendChild(homeTitle);
    homeContainer.appendChild(homeSubtitle);

    container.appendChild(homeContainer);
}

export { loadHome };