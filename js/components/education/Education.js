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
            return false;
        }
        this.splitArrays();
        this.render();
    }

    splitArrays() {
        if (!isArray()) {
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
    }

    isArray() {
        if (!Array.isArray(this.data) || this.data === []) {
            console.error('Error: duomenys turi buti ne tuscia array!');
            return false;
        }
    }

    renderLeft() {
        let HTML = '';
        for (let block of this.leftArr) {
            HTML += `<div class="education-block col-sm-12">
                        <h3>${leftArr.years}</h3>
                        <h4>${leftArr.title}</h4>
                        <p>${leftArr.bio}</p>
                    </div>`
        }
        return HTML;
    }

    renderRight() {
        let HTML = '';
        for (let block of this.leftArr) {
            HTML += `<div class="education-block col-sm-12">
                        <h3>${rightArr.years}</h3>
                        <h4>${rightArr.title}</h4>
                        <p>${rightArr.bio}</p>
                    </div>`
        }
        return HTML;
    }

    render() {
        this.DOMleft.innerHTML = this.renderLeft();
        this.DOMright.innerHTML = this.renderRight();
    }


}
export { Education }
