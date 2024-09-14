import { mainContent } from '../globleVar.js';
import { loadToStorage } from "./storagemanager.js";

export const initCardCreate = () => {
    const apps = loadToStorage();
    mainContent.innerHTML = '';
    if (apps !== null) {
        apps.forEach((app, id) => {
            createCard(id, app.path, app.name, app.desc, app.activ);
        });
    };
};

const createCard = (id, path, name, desc, activ) => {
    const CARD = document.createElement('div');
    CARD.className = 'card';
    CARD.appendChild(createCardCheckbox(id, activ));
    CARD.appendChild(createCardDetails(id, path, name, desc));
    mainContent.appendChild(CARD);
};

const createCardCheckbox = (id, activ) => {
    const CARD_CHECKBOX = document.createElement('input');
    CARD_CHECKBOX.type = 'checkbox';
    CARD_CHECKBOX.className = 'card-checkbox checkedCard';
    CARD_CHECKBOX.checked = activ;
    CARD_CHECKBOX.setAttribute('card-id', id);
    return CARD_CHECKBOX;
};

const createCardDetails = (id, path, name, desc) => {
    const CARD_DETAILS = document.createElement('div');
    CARD_DETAILS.className = 'card-details';
    CARD_DETAILS.appendChild(createCardSummary(id, name));
    CARD_DETAILS.appendChild(createCardContent(id, path, desc));
    return CARD_DETAILS;
};

const createCardSummary = (id, name) => {
    const CARD_SUMMARY = document.createElement('h4');
    CARD_SUMMARY.className = 'card-summary hideBtn';
    CARD_SUMMARY.setAttribute('container-id', `card${id}`);
    CARD_SUMMARY.appendChild(createCardName(name));
    return CARD_SUMMARY;
};

const createCardName = (name) => {
    const CARD_NAME = document.createElement('span');
    CARD_NAME.textContent = name;
    return CARD_NAME;
};

const createCardContent = (id, path, desc) => {
    const CARD_CONTENT = document.createElement('div');
    CARD_CONTENT.className = 'card-content hide';
    CARD_CONTENT.id = `card${id}`;
    CARD_CONTENT.style.display = 'block';
    CARD_CONTENT.appendChild(createCardPath(path));
    CARD_CONTENT.appendChild(createCardDesc(desc));
    CARD_CONTENT.appendChild(createCardBtnContent(path, id));
    return CARD_CONTENT;
};

const createCardPath = (path) => {
    const CARD_PATH = document.createElement('span');
    CARD_PATH.className = 'card-path';
    CARD_PATH.textContent = path;
    return CARD_PATH;
};

const createCardDesc = (desc) => {
    const CARD_DESC = document.createElement('fieldset');
    CARD_DESC.appendChild(createCardDescLegend());
    CARD_DESC.appendChild(createCardDescText(desc));
    return CARD_DESC;
};

const createCardDescLegend = () => {
    const CARD_DESC_LEGEND = document.createElement('legend');
    CARD_DESC_LEGEND.textContent = 'Beschreibung';
    return CARD_DESC_LEGEND;
};

const createCardDescText = (desc) => {
    const CARD_DESC_TEXT = document.createElement('p');
    CARD_DESC_TEXT.innerText = desc;
    return CARD_DESC_TEXT;
};

const createCardBtnContent = (path, id) => {
    const CARD_CONTENT_BTN = document.createElement('div');
    CARD_CONTENT_BTN.className = 'card-content-btn';
    CARD_CONTENT_BTN.appendChild(createCardBtnDel(id));
    CARD_CONTENT_BTN.appendChild(createCardBtnEdit());
    CARD_CONTENT_BTN.appendChild(createCardBtnPathCopy(path));
    CARD_CONTENT_BTN.appendChild(createCardBtnStart(path));
    return CARD_CONTENT_BTN;
};

const createCardBtnDel = (id) => {
    const CARD_BTN = document.createElement('button');
    CARD_BTN.type = 'button';
    CARD_BTN.className = 'deleteBtn';
    CARD_BTN.setAttribute('card-id', id);
    CARD_BTN.disabled = false;
    CARD_BTN. textContent = 'Löschen'; 
    return CARD_BTN;
};

const createCardBtnEdit = () => {
    const CARD_BTN = document.createElement('button');
    CARD_BTN.type = 'button';
    CARD_BTN.id = 'editBtn';
    CARD_BTN.disabled = true;
    CARD_BTN. textContent = 'Bearbeiten'; 
    return CARD_BTN;
};

const createCardBtnPathCopy = () => {
    const CARD_BTN = document.createElement('button');
    CARD_BTN.type = 'button';
    CARD_BTN.id = 'copyPathBtn';
    CARD_BTN.disabled = true;
    CARD_BTN. textContent = 'Pfad Kopieren'; 
    return CARD_BTN;
};

const createCardBtnStart = (path) => {
    const CARD_BTN = document.createElement('button');
    CARD_BTN.type = 'button';
    CARD_BTN.className = 'startBtn';
    CARD_BTN.setAttribute('app-path', path);
    CARD_BTN. textContent = 'Starten'; 
    return CARD_BTN;
};