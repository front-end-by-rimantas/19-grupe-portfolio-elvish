class Validator {
    static isString(selector) {
        if (typeof selector !== 'string' || selector === '') {
            console.error('Error: selektorius turi buti ne tuscias stringas!');
            return false;
        }
        return true;
    }
    static isObject(data) {
        if (typeof data !== 'object' || Array.isArray(data) || data === null) {
            console.error('Error: data turi buti objetas');
            return false;
        }
        return true;
    }
    static isIcon(icon) {
        if (typeof icon !== 'string' || icon === '') {
            console.error('Error: ikona turi buti ne tuscias stringas');
            return false;
        }
        return true;
    }
    static isLink(link) {
        if (link !== '#') {
            console.error('Error: netinkamas linko formatas');
            return false;
        }
        return true;
    }
}

export { Validator }