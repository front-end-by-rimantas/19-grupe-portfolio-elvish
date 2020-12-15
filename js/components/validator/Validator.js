class Validator {
    static isLink(link) {
        if (link !== '#') {
            return false;
        }
        return true;
    }
}

export { Validator }