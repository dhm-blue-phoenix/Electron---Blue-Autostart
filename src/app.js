const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('node:path');
const fs = require('fs');

const shellManager = require('./modules/manage_shell.js');
const dialogManager = require('./modules/manage_dialog.js');
const autoLaunchManager = require('./modules/manage_autolaunch.js');

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
    autoHideMenuBar: false,
    title: '',
    icon: path.join(__dirname, './www/assets/resources/logo.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false
    }
  });
  mainWindow.loadFile(path.join(__dirname, './www/index.html'));
  mainWindow.webContents.openDevTools();
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
 * Kommuniziert asynchron vom Hauptprozess zum Rendererprozess.
*/
ipcMain.handle('open-file-dialog', async () => {
  return dialogManager.openFileDialog();
});

ipcMain.handle('get-file-patch', () => {
  return dialogManager.getFilePath();
});

ipcMain.on('open-file-from-path', (event, filePath) => {
  shellManager.openFileFromPath(filePath);
});

ipcMain.on('set-auto-launch', (event, path, name, activ) => {
  autoLaunchManager.registeAutoLaunch(path, name, activ);
});