import {Validator} from '../validator/Validator.js';

function isValidService(service) {
    if (!Validator.isObject(service)) {
        // console.error('ERROR: this is not an  object.');
        return false;
    }
    if (typeof service.title !== 'string') {
        // console.error('ERROR: title is not  array');
        return false;
    }
    if (typeof service.description !== 'string') {
        // console.error('ERROR: description is not string');
        return false;
    }
    if (typeof service.icon !== 'string') {
        return false;
    }
    if (service.icon.length <5) {
        return false;
    }
    if (service.icon.length >50) {
        return false;
    }



    return true;

}

export { isValidService }