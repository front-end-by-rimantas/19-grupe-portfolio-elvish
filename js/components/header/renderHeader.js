function renderHeader (selector, data) {
    //input val

    //logic
const DOM = document.querySelector(selector);
if (!DOM) {
    return false;
}
let HTML = '';
for (let { link, name } of data) {
    HTML += `<a href="{${link}}">${name}</a>`;
}
    //post logic val
if (HTML === '') {
    return false;
}
    //return
    DOM.innerHTML = HTML;
    return true;
}

export { renderHeader }