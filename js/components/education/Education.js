class Education {
    constructor(params) {
        this.selectorLeft = params.selectorLeft || 'body';
        this.selectorRight = params.selectorRight || 'body';
        this.data = params.data || [];

        this.DOMleft = null;
        this.DOMright = null;

        this.init();
    }
}

export { Education }