/**
 * Our Services sekcija generuojanti funkcija
 * @param {string} selector  Css like salyga, kaip rasti norima vieta turinio generavimui
 * @param {Array} data  Sarasas objeku aprasanciu kiekviena Premium Feature
 * @returns{*}
 */
function renderServices(selector, servData) {
    // input valitation
    if (typeof selector !== 'string') {
        console.error('Error: premum features selector has to be a string type');
        return false;
    }
    if (!Array.isArray(servData.data)) {
        console.error('Error: premum features data has to be a array type');
        return false;
    }
   
    // logic
    const DOM = document.querySelector(selector);
    
    let HTML = '';
    for (let service of servData.data) {
        // console.log(service);
        HTML+= `<div class="col-4 col-sm-12">
        <div class="block">
            <i class="${service.icon}"></i>
            <h3>${service.title}</h3>
            <p>${service.description}.</p>
        </div>
    </div>`
    }

    DOM.innerHTML = HTML;

    // post logic validation

    // return 
}

export { renderServices }