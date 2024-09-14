const { dialog } = require('electron');

let tempFilePath = '';

const openFileDialog = async () => {
    try {
        const resultDialog = await dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [
                { name: 'Ausführbare Dateien', extensions: ['exe', 'bat', 'cmd', 'ps1'] },
                { name: 'Alle Dateien', extensions: ['*'] }
            ]
        });
        if (!resultDialog.canceled && resultDialog.filePaths.length > 0) {
            tempFilePath = resultDialog.filePaths[0];
            console.log('[openFileDialog] Speichere den Dateipfad:', tempFilePath, 'Temporaere ab!');
            return tempFilePath;
        };
        console.log('[openFileDialog] Gebe NULL zurueck, Dialog.Status:', resultDialog);
        return null;
    } catch (err) {
        console.error('[openFileDialog] Es ist ein Problem beim OEffnen des Dialoges aufgetreten:', err);
    };
};

module.exports = { openFileDialog };