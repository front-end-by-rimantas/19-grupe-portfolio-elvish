function renderProgressBar(selector, title, value) {

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
    DOM.insertAdjacentHTML('beforeend', HTML);

    return true;
}

export { renderProgressBar }