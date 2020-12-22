import { isValidInput } from './isValidInput.js';
import { isValidService} from './isValidService.js';

/**
 * Our Services sekcija generuojanti funkcija
 * @param {string} selector  Css like salyga, kaip rasti norima vieta turinio generavimui
 * @param {Array} data  Sarasas objeku aprasanciu kiekviena Premium Feature
 * @returns{*}
 */
function renderServices(selector, servData) {
    // input valitation
    if (!isValidInput(selector, servData)) {
        return false;
    }
    
    
   
    // logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error(' ERROR: could not find an elements by a given selector')
        return false;
    }
    
    let HTML = '';
    const count =  servData.maxLimit|| servData.data.length;

    for ( let i=0; i<count; i++) {
    const service = servData.data[i];
    if ( !isValidService(service)) {
        continue;
    }
    
        HTML+= `<div class="col-4 col-sm-12">
        <div class="block">
            <i class="${service.icon}"></i>
            <h3>${service.title}</h3>
            <p>${service.description}.</p>
        </div>
    </div>`;
    }

   

    // post logic validation
    if (HTML === '') {
        console.error(' ERROR: given data object does not contain valid data')
        return false;
    }

    // return
    DOM.innerHTML = HTML;
    return true;
}

export { renderServices }