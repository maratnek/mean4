const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
require('./server.js');

let win

function createWindow () {

  win = new BrowserWindow({width: 800, height: 600, icon: './deploy/assets/img/stock-icon.svg'})

  // const spawn = require("child_process").spawn;
  // const node = spawn("node", ["./server.js"], { cwd: process.cwd()  });
  // const request = require("request");
  // const expressAppUrl = "http://127.0.0.1:3000";
  // let checkServerRunning = setInterval(() => {
  //   request(expressAppUrl, (error, response, body) => {
  //     if (!error && response.statusCode == 200) {
  //       clearInterval(checkServerRunning);
  //       win.loadURL(expressAppUrl);
  //     }
  //   });
  // }, 1000);
  // win.focus();

  const expressAppUrl = "http://localhost:3000";
  win.loadURL(expressAppUrl);
  // Open the DevTools.
  // win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
