let lastHide = '';

const toggleVisibleElements = (hide) => {
    if (lastHide && lastHide !== hide) hideElement(lastHide);
    if (lastHide !== hide) {
        showElement(hide);
        lastHide = hide;
    } else {
        hideElement(hide);
        lastHide = '';
    };
};

const hideElement = (id) => {
    const element = document.getElementById(id);
    if (!element) return console.error('[hideElement] ID wurde nicht gefunden!');
    element.classList.add('hide');
};

const showElement = (id) => {
    const element = document.getElementById(id);
    if (!element) return console.error('[showElement] ID wurde nicht gefunden!');
    element.classList.remove('hide');
};

export { toggleVisibleElements, hideElement };