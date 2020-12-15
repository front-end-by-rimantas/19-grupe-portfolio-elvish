import { Validator } from '../validator/Validator.js'

function isValidLink(link) {
    if (!Validator.isLink(link)) {
        return false;
    }
    return true;
}

export { isValidLink }