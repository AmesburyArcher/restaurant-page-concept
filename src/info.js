import { createHTMLElement, container } from "./index";

function loadInfo() {
    const infoContainer = createHTMLElement('div', 'info-container', null, null);
    const contactContainer = createHTMLElement('form', 'contact-form', null, null);

    const infoTitle = createHTMLElement('div', 'info-title', null, 'Contact Us');
    const infoSubtitle = createHTMLElement('div', null, ['info-subtitle'], 'Fill out the forms below to leave us a message!');

    const name = createHTMLElement('input', 'name', ['input'], null);
    name.type = 'text';
    name.setAttribute('placeholder', 'John Doe');
    const nameLabel = createHTMLElement('label', null, ['input-label'], 'Name');
    nameLabel.setAttribute('for', 'name')

    const email = createHTMLElement('input', 'email', ['input'], null);
    email.type = 'email';
    email.setAttribute('placeholder', 'john.doe@gmail.com');
    const emailLabel = createHTMLElement('label', null, ['input-label'], 'Email');
    emailLabel.setAttribute('for', 'email');

    const message = createHTMLElement('textarea', 'message', ['input'], null);
    message.setAttribute('placeholder', 'Your message here');
    const messageLabel = createHTMLElement('label', null, ['input-label'], 'Message')
    messageLabel.setAttribute('for', 'message');

    const submitBtn = createHTMLElement('button', 'submit-btn', null, 'Submit');


    const mapContainer = createHTMLElement('div', 'map-container', null, null);
    const map = createHTMLElement('div', 'map', null, null);
    map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.3055016672383!2d-122.90399828434782!3d49.251655180889465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548678309b60cda7%3A0x512bf1c3d258a8b9!2sLougheed%20Village%20Bar%20%26%20Grill!5e0!3m2!1sen!2sca!4v1651010077231!5m2!1sen!2sca" 
    width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    const mapTitle = createHTMLElement('div', null, ['map-title'], 'Location');

    contactContainer.appendChild(nameLabel);
    contactContainer.appendChild(name);
    contactContainer.appendChild(emailLabel);
    contactContainer.appendChild(email);
    contactContainer.appendChild(messageLabel);
    contactContainer.appendChild(message);
    contactContainer.appendChild(submitBtn);

    mapContainer.appendChild(mapTitle);
    mapContainer.appendChild(map);
    
    infoContainer.appendChild(infoTitle);
    infoContainer.appendChild(infoSubtitle);
    infoContainer.appendChild(contactContainer);
    infoContainer.appendChild(mapContainer);


    container.appendChild(infoContainer);
}

export { loadInfo }