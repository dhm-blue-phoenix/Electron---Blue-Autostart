const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('node:path');
const fs = require('fs');

const shellManager = require('./modules/manage_shell.js');
const dialogManager = require('./modules/manage_dialog.js');
const autoLaunchManager = require('./modules/manage_autolaunch.js');

app.setPath('userData', path.join(app.getPath('appData'), 'Teal_Interactive', 'AutoLaunch'));

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    minWidth: 600,
    minHeight: 500,
    width: 800,
    height: 600,
    center: true,
    autoHideMenuBar: true,
    title: '',
    icon: path.join(__dirname, './www/assets/resources/logo.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
      // partition: 'nopersist',  // Verhindert das Speichern von Daten
    }
  });
  mainWindow.loadFile(path.join(__dirname, './www/index.html'));
  // mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createMainWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

/**
 * Folgende punkte fehlen:
 * =======================
 * - das erstellen einer Log Datei
 * - überbrüfen ob der task vom gestarteten program leuft
 * - eine funktion zum beenden eines programmes und dessen task
 * - eine funktion zum öffnen des programm ordners
*/
ipcMain.handle('open-file-dialog', async () => {
  return dialogManager.openFileDialog();
});

ipcMain.on('open-file-from-path', (event, filePath) => {
  shellManager.openFileFromPath(filePath);
});

ipcMain.on('set-auto-launch', (event, path, name, activ) => {
  autoLaunchManager.registeAutoLaunch(path, name, activ);
});