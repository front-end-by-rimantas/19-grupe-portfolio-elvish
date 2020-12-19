class Clients {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];
        this.pseudoCount = params.pseudoCount || 2;
        this.areDotsVisible = params.areDotsVisible;

        this.DOM = null;
        this.listDOM = null;
        this.controlsDOM = null;
        this.dotsDOM = null;
        this.activeDotIndex = 0;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        if (this.data.length < 1) {
            console.error('Error: nera atsiliepimu duomenu');
            return false;
        }
        this.render();
        this.addEvents();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('Error: nerandu selektoriaus!');
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    isValidClient(client) {
        if (typeof client.name !== 'string' || client.name === '') {
            console.error('Error: kliento vardas turi buti ne tuscias string');
            return false;
        }
        if (typeof client.location !== 'string' || client.location === '') {
            console.error('Error: kliento lokacija turi buti ne tuscias string');
            return false;
        }
        if (typeof client.comment !== 'string' || client.location === '') {
            console.error('Error: kliento komentaras turi buti ne tuscias string');
            return false;
        }
        return true;
    }

    isArray() {
        if (!Array.isArray(this.data) || this.data === []) {
            console.error('Error: Data turi buti ne tuscia array!');
            return false;
        }
        return true;
    }

    generateClients() {
        let HTML = '';
        const itemWidth = 100 / ((2 * this.pseudoCount) + this.data.length);
        const dataCopy = [this.data[2], this.data[1], ...this.data, this.data[0], this.data[1]]
        for (let client of dataCopy) {
            if (!this.isValidClient(client)) {
                continue;
            }
            HTML += `<div class="item" style="width: ${itemWidth}%">
        <i class="fa fa-user-circle-o avatar"></i>
        <div class="name">${client.name}</div>
        <div class="company">${client.location}</div>
        <p class="description">"${client.comment}"
        </p>
    </div>`
        }
        return HTML;
    }

    generateDots() {
        let HTML = '';
        const testimonialsCount = this.data.length;
        if (!this.areDotsVisible) {
            console.log('Taskeliai nustatyti buti nematomais');
            return HTML;
        }
        HTML = `<div class="minus active"></div>`
        HTML += `<div class="minus"></div>`.repeat(testimonialsCount - 1);
        return HTML;
    }

    render() {
        if (!this.isArray()) {
            return false;
        }
        const listWidth = (this.data.length + 2 * this.pseudoCount) * 100;
        const HTML = `<div class="testimonials">
        <div class="view">
            <div class="list" style="width: ${listWidth}%; margin-left: -${this.pseudoCount}00%;">
               ${this.generateClients()}
            </div>
        </div>
        <div class="controls">${this.generateDots()}</div>
    </div>`;

        this.DOM.innerHTML = HTML;
        console.log(this.DOM);

        this.listDOM = this.DOM.querySelector('.list');
        console.log(this.listDOM);

        if (this.areDotsVisible) {
            this.controlsDOM = this.DOM.querySelector('.controls');
            this.dotsDOM = this.DOM.querySelectorAll('.minus');
            console.log(this.dotsDOM);
        }

    }

    clickDot(dotIndex) {
        const dot = this.dotsDOM[dotIndex];
        this.listDOM.style.marginLeft = -100 * (this.pseudoCount + dotIndex) + '%';
        this.dotsDOM[this.activeDotIndex].classList.remove('active');
        this.activeDotIndex = dotIndex;
        dot.classList.add('active');



    }

    addEvents() {
        if (this.areDotsVisible) {
            for (let i = 0; i < this.dotsDOM.length; i++) {
                const dot = this.dotsDOM[i];
                dot.addEventListener('click', () => {
                    this.clickDot(i);
                }
                )
            }
        }
    }
}

export { Clients }