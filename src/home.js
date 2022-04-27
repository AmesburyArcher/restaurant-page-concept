import { createHTMLElement, container } from "./index";

function loadHome() {
    const homeContainer = createHTMLElement('div', 'home-container', null, null);

    const homeTitle = createHTMLElement('div', null, ['home-title'], 'Welcome to Allo Eatery');
    const homeSubtitle = createHTMLElement('div', null, ['home-subtitle'], 'A Taste of Italy');
    const foodImage = createHTMLElement('img', null, ['home-image'], null);
    foodImage.setAttribute('src', '../src/assets/photo.jpg');
    const restaurantBio = createHTMLElement('div', null, ['home-bio'], `Allo Eatery has been serving the community since 1969. 
    With a passion for quality and using only the finest ingredients around, 
    Allo Eatery will certainly leave you satisfied and wanting more.`);

    homeContainer.appendChild(homeTitle);
    homeContainer.appendChild(homeSubtitle);
    homeContainer.appendChild(foodImage);
    homeContainer.appendChild(restaurantBio);

    container.appendChild(homeContainer);
}

export { loadHome };