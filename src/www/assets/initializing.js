import { initCardCreate } from './js/initCardCreate.js';
import {
    addEventToDialog,
    addEventToInsertText,
    addEventToHideBtn,
    addEventToSaveForm,
    addEventToCheckedCard,
    addEventToOpenFile,
    addEventToDelCard
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
        await addEventToDelCard();
    } catch (err) {
        console.error('Beim Initializing ist ein problem aufgetreten:', err);
    };
};