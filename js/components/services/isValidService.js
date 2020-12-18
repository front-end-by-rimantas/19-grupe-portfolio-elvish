function isValidService(service) {
    if (typeof service !== 'object') {
        console.error('ERROR....');
        return false;
    }
    if (typeof service.title !== 'string') {
        console.error('ERROR....');
        return false;
    }
    if (typeof service.description !== 'string') {
        console.error('ERROR....');
        return false;
    }

    return true;

}

export { isValidService }