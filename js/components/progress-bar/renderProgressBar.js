import { isValidSingleProgressBar } from './isValidSingleProgressBar.js';

function renderProgressBar(selector, title, value) {
    if (!isValidSingleProgressBar({ selector, title, value })) {
        return false;
    }

    const HTML = `<div class="progress-bar">
                    <div class="top">
                        <div class="label">${title}</div>
                        <div class="value">${value}%</div>
                    </div>
                    <div class="bottom">
                        <div class="bar" style="width: ${value}%;"></div>
                    </div>
                </div>`;

    const DOM = document.querySelector(selector);
    
    if (!DOM) {
        console.error('ERROR: nerasta nurodyta vieta.');
        return false;
    }
    
    DOM.insertAdjacentHTML('beforeend', HTML);

    return true;
}

export { renderProgressBar }