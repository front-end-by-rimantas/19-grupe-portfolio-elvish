class Clients {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];
        this.icon =

            this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        render();
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

    generateClients() {
        let HTML = '';
        for (let client of this.data) {
            if (!isValidClient(client)) {
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
    }

    render() {
        const HTML = `<div class="testimonials">
        <div class="view">
            <div class="list style="width: 500%">
               ${this.generateClients}
            </div>
        </div>
        <div class="controls">
            <div class="minus"></div>
            <div class="minus"></div>
            <div class="minus"></div>
        </div>
    </div>`;

        this.DOM.innerHTML = HTML;
    }
}

export { Clients }