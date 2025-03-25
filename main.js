import { app, BrowserWindow, ipcMain } from 'electron'
const ipc = ipcMain

const createWindow = () => {
    const win = new BrowserWindow({
      width: 350,
      height: 400,
      alwaysOnTop: true,
      fullscreenable: false, 
      autoHideMenuBar: true,
      opacity: 5,
      darkTheme: true,
      center: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false 
      }
    })
    win.setPosition(1030,370);
    win.loadFile('./pages/index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })

  ipc.on('save_and_close', () => {
    if (process.platform !== 'darwin')
    {
        app.quit()
    } 
  });