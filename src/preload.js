const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
    openFileFromPath: (filePath) => ipcRenderer.send('open-file-from-path', filePath),
    setAutoLaunch: (path, name, activ) => ipcRenderer.send('set-auto-launch', path, name, activ)
});