const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Tray = electron.Tray;

let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({width: 1024, height: 550});

  mainWindow.loadFile('bin/index2.html');

  mainWindow.on('closed', () => {

    mainWindow = null;

  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {

    app.quit();

  }

});

app.on('activate', () => {

  if (mainWindow === null) {

    createWindow();

  }
  
}); 
