class Stats {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;

        this.DOM = null;
        this.countersDOMs = null;

        this.animationDuration = 2;
        this.animationFPS = 20;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.render();
        this.addEvents();
        this.isCounterValid();
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
            HTML += `<div class="counter col-3 col-sm-12">
                        <i class="mbri-${item.icon}" aria-hidden="true"></i>
                        <h2>0</h2>
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
            return false;
        }
        this.DOM.innerHTML = HTML;
        this.countersDOMs = this.DOM.querySelectorAll('.counter');

    }

    counterAnimation(counterIndex) {
        const finalNumber = this.data[counterIndex].header;
        const totalTickCount = this.animationDuration * this.animationFPS;
        const numberDOM = this.countersDOMs[counterIndex].querySelector('h2');
        let count = 0;
        let tick = 0;

        const timer = setInterval(() => {
            count = Math.floor(tick / totalTickCount * finalNumber);
            tick++;
            numberDOM.innerText = count;
            if (finalNumber === count) {
                clearInterval(timer);
            }
        }, 1000 / this.animationFPS)
    }

    shouldCounterAnimationRun() {
        const windowBottom = scrollY + innerHeight;
        let counterBottom = 0;
        for (let i = 0; i < this.countersDOMs.length; i++) {
            if (this.data[i].animated) {
                continue;
            }
            const counter = this.countersDOMs[i];
            let counterPosition = counter.getBoundingClientRect();
            counterBottom = counterPosition.bottom + scrollY;

            if (counterBottom < windowBottom) {
                this.data[i].animated = true;
                this.counterAnimation(i);
            }
        }
    }

    addEvents() {
        addEventListener('scroll', () => {
            this.shouldCounterAnimationRun();
        });
    }

    isCounterValid() {

    }
}

export { Stats }