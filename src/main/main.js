const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win
const ROOT_PATH = 'file://' + path.resolve('')

function createWindow () {
    win = new BrowserWindow({width: 800, height: 600})
    win.loadURL(`${ROOT_PATH}/dist/renderer/index.html`)

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