class Education {
    constructor(params) {
        this.selectorLeft = params.selectorLeft || 'body';
        this.selectorRight = params.selectorRight || 'body';
        this.data = params.data || [];
        this.DOMleft = null;
        this.DOMright = null;
        this.leftArr = [];
        this.rightArr = [];

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            console.error('Error: nerandu selectoriaus');
            return false;
        }
        this.splitArrays();
        this.render();
    }

    splitArrays() {
        if (!this.isData()) {
            return false;
        }
        for (let i = 0; i < this.data.length; i += 2) {
            this.leftArr.push(this.data[i]);
        }
        for (let i = 1; i < this.data.length; i += 2) {
            this.rightArr.push(this.data[i]);
        }
    }

    isValidSelector() {
        const leftSelector = document.querySelector(this.selectorLeft);
        const rightSelector = document.querySelector(this.selectorRight);
        if (!leftSelector) {
            console.error('Error: nerandu kairiojo stulpelio!');
            return false;
        }
        if (!rightSelector) {
            console.error('Error: nerandu desiniojo stulpelio!');
            return false;
        }
        this.DOMleft = leftSelector;
        this.DOMright = rightSelector;
        return true;
    }

    isData() {
        if (!Array.isArray(this.data) || this.data === []) {
            console.error('Error: duomenys turi buti ne tuscia array!');
            return false;
        }
        return true;
    }

    renderLeft() {
        let HTML = '';
        for (let block of this.leftArr) {
            HTML += `<div class="education-block col-sm-12">
                        <h3>${block.years}</h3>
                        <h4>${block.title}</h4>
                        <p>${block.bio}</p>
                    </div>`
        }
        if (HTML === '') {
            console.error('Error: nepavyko sugeneruoti kairiojo stulpelio turinio!')
            return false
        }
        return HTML;
    }

    renderRight() {
        let HTML = '';
        for (let block of this.rightArr) {
            HTML += `<div class="education-block col-sm-12">
                        <h3>${block.years}</h3>
                        <h4>${block.title}</h4>
                        <p>${block.bio}</p>
                    </div>`
        }
        if (HTML === '') {
            console.error('Error: nepavyko sugeneruoti desiniojo stulpelio turinio!')
            return false
        }
        return HTML;
    }

    render() {
        this.DOMleft.innerHTML = this.renderLeft();
        this.DOMright.innerHTML = this.renderRight();
    }

}
export { Education }
