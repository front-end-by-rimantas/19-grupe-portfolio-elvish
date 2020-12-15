import { isValidInput } from './isValidInput.js';
import { isValidLink } from './isValidLink.js';

function renderHeroSocials(selector, data) {
    if (!isValidInput(selector, data)) {
        return false;
    }

    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }

    let HTML = '';

    for (let { icon, link } of data) {
        if (!isValidLink(link)) {
            return false;
        }
        HTML += `<a href="${link}" target="_blank" class="fa fa-${icon}" aria-hidden="true"></a>`
    }

    if (HTML === '') {
        return false;
    }

    DOM.innerHTML = HTML;
    return true;
}

export { renderHeroSocials }