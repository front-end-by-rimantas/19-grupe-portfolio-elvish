import {Validator} from '../validator/Validator.js';

function isValidInput (selector, servData ) {

    if (!Validator.isString(selector)) {
     
        // console.error('Error: our services selector has to be a string type');
        return false;
    }
        // if (selector === 'number') {
        //     // console.error('Error: our services data cannot be numeric');
        //     return false;
        // }

        if (!Validator.isObject(servData)) {
        // console.error('Error: our services data has to be a array type');
        return false;

        }
        if (!Validator.isArray(servData.data)) {
            return false;
        }
    

    return true;

}
export {isValidInput}