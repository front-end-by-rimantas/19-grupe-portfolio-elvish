function isValidInput (selector, servData ) {

    if (typeof selector !== 'string') {
        console.error('Error: our services selector has to be a string type');
        return false;
    }
    if (!Array.isArray(servData.data)) {
        console.error('Error: our services data has to be a array type');
        return false;
    }
    if (selector === '') {
        console.error('Error: our services data cannot be emty');
        return false;
    }
    if (selector === 'number') {
        console.error('Error: our services data cannot be numeric');
        return false;
    }

    return true;

}
export {isValidInput}