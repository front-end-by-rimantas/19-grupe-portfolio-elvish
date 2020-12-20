function isInputValid(selector, data) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selektorius turi buti tekstinio tipo.');
        return false;
    }
    if (selector === '') {
        console.error('ERROR: selektorius negali buti tuscias tekstas.');
        return false;
    }
    if (!Array.isArray(data)) {
        console.error('ERROR: social ikonoms sugeneruoti reikia array tipo duomenu.');
        return false;
    }
    if (data.length === 0) {
        console.error('ERROR: social ikonoms sugeneruoti reikia ne tuscio array tipo duomenu saraso.');
        return false;
    }
    return true;
}

export { isInputValid }