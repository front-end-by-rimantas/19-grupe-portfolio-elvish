/**
 * Our Services sekcija generuojanti funkcija
 * @param {string} selector  Css like salyga, kaip rasti norima vieta turinio generavimui
 * @param {Array} data  Sarasas objeku aprasanciu kiekviena Premium Feature
 * @returns{*}
 */
function renderServices(selector, data) {
    // input valitation

    // logic
    const DOM = document.querySelector(selector);
    
    let HTML = '';
    for (let service of data) {
        console.log(feature);
    }

    DOM.innerHTML = HTML;

    // post logic validation

    // return 
}

export { renderServices }