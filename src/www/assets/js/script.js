import { tempAppPath, setAutoStart } from '../api/main.js';
import { filePath } from '../globleVar.js';
import { delItemToStorage, loadToStorage } from './storagemanager.js';
import { funcFormToAddFile } from './addFileToForm.js';
import { toggleVisibleElements } from './toggleVisibleElements.js';

const insertTheText = async () => {
    try {
        const textFromClipboard = await navigator.clipboard.readText();
        filePath.value = textFromClipboard;
        tempAppPath.splice(0, 1);
        tempAppPath.push(textFromClipboard);
    } catch (err) {
        console.error('Es ist ein Problem beim Laden aus der Zwischenablage aufgetreten!', err);
    };
};

const checkedCard = (event) => {
    const cardId = event.currentTarget.getAttribute('card-id');
    const apps = loadToStorage();
    apps[cardId].activ = !apps[cardId].activ;
    delItemToStorage(apps[cardId], cardId);
    apps.forEach(app => {
        setAutoStart(app.path, app.name, app.activ);
    });
};

const saveForm = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('form-id');
    funcFormToAddFile[id]();
};

const hideBtn = (event) => {
    const hide = event.currentTarget.getAttribute('container-id');
    toggleVisibleElements(hide);
};

const delCard = (event) => {
    const cardId = event.currentTarget.getAttribute('card-id');
    delItemToStorage('', cardId, 'delete');
};

export { insertTheText, checkedCard, saveForm, hideBtn, delCard };