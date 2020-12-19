class Clients {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];
        this.testimonialsCount = params.testimonialsCount || 0;
        this.pseudoCount = params.pseudoCount || 2;
        this.areDotsVisible = params.areDotsVisible;

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
        for (let client of this.data) {
            if (!this.isValidClient(client)) {
                continue;
            }
            HTML += `<div class="item" style="width: 20%">
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
        if (!this.areDotsVisible) {
            console.log('Taskeliai nustatyti buti nematomais');
            return HTML;
        }
        HTML += `<div class="minus"></div>`.repeat(this.testimonialsCount);
        return HTML;
    }

    render() {
        if (!this.isArray()) {
            return false;
        }
        const HTML = `<div class="testimonials">
        <div class="view">
            <div class="list" style="width: 500%">
               ${this.generateClients()}
            </div>
        </div>
        <div class="controls">${this.generateDots()}</div>
    </div>`;

        this.DOM.innerHTML = HTML;
    }
}

export { Clients }