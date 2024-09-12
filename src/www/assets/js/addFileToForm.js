import { filePath, fileName, fileDescription } from '../globleVar.js';
import { saveToStorage } from './storagemanager.js';
import { hideElement } from './toggleVisibleElements.js';

const formAddFile = () => {
    const app = {
        'path': filePath.value,
        'name': fileName.value,
        'desc': fileDescription.value,
        'activ': false
    };
    saveToStorage(app);
    resetForm();
    hideElement('addFileOverForm');
};

const resetForm = () => {
    filePath.value = '';
    fileName.value = '';
    fileDescription.value = 'Keine Beschreibung';
};

const funcFormToAddFile = [formAddFile];

export { funcFormToAddFile };