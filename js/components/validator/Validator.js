class Validator {
    static isString(selector) {
        if (typeof selector !== 'string' || selector === '' || selector ==="number") {
            console.error('Error: selektorius turi buti ne tuscias stringas ir ne skaitmenys!');
            return false;
        }
        return true;
    }
    static isArray(data) {
        if (!Array.isArray(data) || data === '') {
            console.error('Error: data turi buti ne tuscia array');
            return false;
        }
        return true;
    }
    static isObject(object) {
        if (typeof object !== 'object' ||
            Array.isArray(object) ||
            object === null) {
            return false;
        }
        return true;
    }
    static isIcon(icon) {
        if (typeof icon !== 'string' || icon === '' ||
        icon.length < 5 || icon.length > 50 ) {
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
    static isTitle(text) {
        if (typeof text !== 'string' ||
            text === '' ||
            text > 50) {
            return false;
        }
        return true;
    }
    static isDescription(text) {
        if (typeof text !== 'string' ||
            text === '' ||
            text > 1000) {
            return false;
        }
        return true;
    }
}

export { Validator }