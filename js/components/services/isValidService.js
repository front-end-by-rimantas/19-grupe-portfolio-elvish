function isValidService(service) {
    if (typeof service !== 'object') {
        console.error('ERROR: this is not object.');
        return false;
    }
    if (typeof service.title !== 'string') {
        console.error('ERROR: title is not  array');
        return false;
    }
    if (typeof service.description !== 'string') {
        console.error('ERROR: description is not string');
        return false;
    }

    return true;

}

export { isValidService }