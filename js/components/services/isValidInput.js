function isValidInput (selector, servData ) {

    if (typeof selector !== 'string') {
        console.error('Error: premum features selector has to be a string type');
        return false;
    }
    if (!Array.isArray(servData.data)) {
        console.error('Error: premum features data has to be a array type');
        return false;
    }
    return true;

}
export {isValidInput}