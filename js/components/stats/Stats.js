class Stats {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.render();
    }

    isValidSelector() {
        const selector = document.querySelector(this.selector);
        if (!selector) {
            console.error('Error: nerandu selektoriaus!');
            return false
        }
        this.DOM = selector;
        return true;
    }

    isValidData() {
        if (!Array.isArray(this.data) || this.data === []) {
            console.error('Error: data turi buti ne tuscia array!');
            return false;
        }
        return true;
    }

    isValidItem(dataItem) {
        if (typeof dataItem.icon !== 'string' || dataItem.icon === '') {
            console.error('Error: ikona datoje turi buti ne tuscias string!');
            return false;
        }
        if (typeof dataItem.header !== 'number' || dataItem.header < 0) {
            console.error('Error: header datoje turi buti teigiamas skaicius');
            return false;
        }
        if (typeof dataItem.text !== 'string' || dataItem.text === '') {
            console.error('Error: tekstas datoje turi buti ne tuscias string!');
            return false;
        }
        return true;
    }

    generateItems() {
        let HTML = '';
        for (let item of this.data) {
            if (!this.isValidItem(item)) {
                continue;
            }
            HTML += `<div class="col-3 col-sm-12">
                        <i class="mbri-${item.icon}" aria-hidden="true"></i>
                        <h2>${item.header}</h2>
                        <p>${item.text}</p>
                    </div>`;
        }
        if (HTML === '') {
            console.error('Error: neapvyko sugeneruoti HTML turinio');
            return false;
        }
        return HTML;
    }

    render() {
        if (!this.isValidData()) {
            return false;
        }
        const HTML = this.generateItems();
        if (!HTML) {
            console.error('Error: kazkas ne to');
            return false;
        }
        this.DOM.innerHTML = HTML;
    }
}

export { Stats }