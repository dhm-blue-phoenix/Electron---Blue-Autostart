import { outputFilePath } from '../globleVar.js';

let tempAppPath = [];

const openFileViaDialog = async () => {
    try {
        const filePath = await window.api.openFileDialog();
        if (filePath) {
            tempAppPath.splice(0, 1);
            tempAppPath.push(filePath);
            console.log('Dateipfad gespeichert:', tempAppPath);
            outputFilePath.value = filePath;
        };
    } catch (err) {
        console.error('Es ist ein Problem beim OEffnen des Dialoges aufgetreten', err);
    };
};

const openFileToStart = async (event) => {
    try {
        // const filePath = await window.api.getFilePatch();
        // if (filePath) {
        //     window.api.openFileFromPatch(filePath);
        // };
        const path = event.currentTarget.getAttribute('app-path');
        window.api.openFileFromPath(path);
    } catch (err) {
        console.error('Es ist ein Problem beim Öffnen der Datei aufgetreten', err);
    };
};

const setAutoStart = (path, name, activ) => {
    window.api.setAutoLaunch(path, name, activ);
};

export { tempAppPath, setAutoStart, openFileViaDialog, openFileToStart };