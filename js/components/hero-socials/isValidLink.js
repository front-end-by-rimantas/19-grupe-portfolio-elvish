import { Validator } from '../validator/Validator.js'

function isValidLink(icon, link) {
    if (!Validator.isLink(link)) {
        return false;
    }
    if (!Validator.isIcon(icon)) {
        return false;
    }
    return true;
}

export { isValidLink }