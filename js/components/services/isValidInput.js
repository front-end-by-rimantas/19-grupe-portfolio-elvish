import {Validator} from '../validator/Validator.js';

function isValidInput (selector, servData ) {

    if (!Validator.isString(selector)) {
        return false;
    }
    if (!Validator.isObject(servData)) {
        return false;
        }
    if (!Validator.isArray(servData.data)) {
        return false;
        }
    

    return true;

}
export {isValidInput}