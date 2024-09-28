const { dialog } = require('electron');

let tempFilePath = '';
let isDialogOpen = false;

const openFileDialog = async () => {
    if (isDialogOpen) {
        console.log('[openFileDialog] Der Dialog ist bereits geöffnet.');
        return null;
    };

    isDialogOpen = true;

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
    } finally {
        isDialogOpen = false;
    }
};

module.exports = { openFileDialog };