import { openFileViaDialog, openFileToStart } from './api/main.js';
import { openFileDialog, insertText } from './globleVar.js';
import { insertTheText, checkedCard, saveForm, hideBtn, delCard } from './js/script.js';

const addEventToHideBtn = () => {
    document.querySelectorAll('.hideBtn').forEach(btn => {
        if (!btn.hasEventListener) {
            btn.addEventListener('click', (event) => { hideBtn(event); });
        };
        btn.hasEventListener = true;
    });
};

const addEventToSaveForm = () => {
    document.querySelectorAll('form').forEach(form => {
        if (!form.hasEventListener) {
            form.addEventListener('submit', (event) => { saveForm(event); });
        };
        form.hasEventListener = true;
    });
};

const addEventToCheckedCard = () => {
    document.querySelectorAll('.checkedCard').forEach(checkbox => {
        if (!checkbox.hasEventListener) {
            checkbox.addEventListener('click', (event) => { checkedCard(event); });
        };
        checkbox.hasEventListener = true;
    });
};

const addEventToInsertText = () => {
    if (!insertText.hasEventListener) {
        insertText.addEventListener('click', () => { insertTheText() });
    };
    insertText.hasEventListener = true;
};

// Events für main api
const addEventToDialog = () => {
    if (!openFileDialog.hasEventListener) {
        openFileDialog.addEventListener('click', () => { openFileViaDialog() });
    };
    openFileDialog.hasEventListener = true;
};

const addEventToOpenFile = () => {
    document.querySelectorAll('.startBtn').forEach(btn => {
        if (!btn.hasEventListener) {
            btn.addEventListener('click', (event) => { openFileToStart(event); });
        };
        btn.hasEventListener = true;
    });
};

const addEventToDelCard = () => {
    document.querySelectorAll('.deleteBtn').forEach(btn => {
        if(!btn.hasEventListener) {
            btn.addEventListener('click', (event) => { delCard(event) });
        };
        btn.hasEventListener = true;
    });
};

export {
    addEventToInsertText,
    addEventToHideBtn,
    addEventToSaveForm,
    addEventToCheckedCard,
    addEventToDialog,
    addEventToOpenFile,
    addEventToDelCard
};