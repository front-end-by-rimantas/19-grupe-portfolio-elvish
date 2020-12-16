import { Validator } from '../validator/Validator.js';

function isValidInput(selector, data) {
    if (!Validator.isString(selector)) {
        return false;
    }
    if (!Validator.isArray(data)) {
        return false;
    }
    return true;
}

export { isValidInput }
