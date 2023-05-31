require('dotenv').config();

const { app, BrowserWindow } = require('electron');
const log = require('electron-log');

log.transports.file.level = 'debug';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  log.info('Aplicacao no ar!');
  win.loadFile('src/pages/login/index.html');
}

app.whenReady().then(createWindow);


