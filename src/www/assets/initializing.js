import { initCardCreate } from './js/initCardCreate.js';
import {
    addEventToDialog,
    addEventToInsertText,
    addEventToHideBtn,
    addEventToSaveForm,
    addEventToCheckedCard,
    addEventToOpenFile
} from './addEvents.js';


document.addEventListener('DOMContentLoaded', () => {
    initializing();
});

export const initializing = async () => {
    try {
        await initCardCreate();
        await addEventToDialog();
        await addEventToOpenFile();
        await addEventToInsertText();
        await addEventToHideBtn();
        await addEventToSaveForm();
        await addEventToCheckedCard();
        console.log('Start Abgeschlossen!');
    } catch (err) {
        console.error(err);
    };
};