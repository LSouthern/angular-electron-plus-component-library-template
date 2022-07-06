const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path')

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      devTools: true,
      nodeIntegration: true
    }
  })

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/angular-electron-plus-component-library-template/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  win.on('closed', function () {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin');
    app.quit();
})

app.on('activate', function () {
  if (win === null)
    createWindow()
})
