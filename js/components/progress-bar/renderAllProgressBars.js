import { renderProgressBar} from './renderProgressBar.js';

function renderAllProgressBars(data) {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        const bar = data[i];
        renderProgressBar(bar.selector, bar.title, bar.value);
    }
}

export { renderAllProgressBars }