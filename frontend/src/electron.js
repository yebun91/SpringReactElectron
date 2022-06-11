const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	});
	win.loadURL('http://localhost:3000');
	win.webContents.openDevTools({ mode: 'detach' });
}
app.whenReady().then(() => {
	createWindow();
});
app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') app.quit();
});
