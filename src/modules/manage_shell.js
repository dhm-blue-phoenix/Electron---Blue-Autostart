const { shell } = require('electron');

const openFileFromPath = async (filePath) => {
    try {
        console.log('[openFileFromPath] data:', filePath);
        await shell.openPath(filePath);
        console.log('[openFileFromPath] OEffnen der Datei wahr erfolgreich!');
    } catch (err) {
        console.error('[openFileFromPath] Es ist ein Problem beim Öffnen der Datei aufgetreten:', err);
    };
};

module.exports = { openFileFromPath };