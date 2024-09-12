const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
    getFilePath: () => ipcRenderer.invoke('get-file-path'),
    openFileFromPath: (filePath) => ipcRenderer.send('open-file-from-path', filePath),
    setAutoLaunch: (path, name, activ) => ipcRenderer.send('set-auto-launch', path, name, activ)
});