import { createHTMLElement, container } from "./index";

function loadMenu() {

    const menuSection = createHTMLElement('div', 'menu-container', null, null);

    const menuItems = [
        {
            name: 'Pasta', 
            description: 'This is the best pasta you\'ll ever eat',
            price: '$24.99'
        },
        {
            name: 'Pizza',
            description: 'This is the best pizza you\'ll ever eat',
            price: '19.99'
        },
        
    ]

    menuItems.forEach(item => {
        const menuList = createHTMLElement('div', null, ['menu-list'], null);

        const title = createHTMLElement('div', null, ['menu-item', 'menu-title'], item.name);

        const description = createHTMLElement('div', null, ['menu-item', 'menu-info'], item.description);

        const price = createHTMLElement('div', null, ['menu-item', 'menu-price'], item.price);

        menuList.appendChild(title);
        menuList.appendChild(description);
        menuList.appendChild(price);
        menuSection.appendChild(menuList);
        container.appendChild(menuSection);

    })

}

export { loadMenu }