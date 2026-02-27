const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 700,

    minWidth: 500,
    minHeight: 400,

    frame: false,

    resizable: true,
    maximizable: true,
    minimizable: true,

    fullscreen: false,
    fullscreenable: true,

    alwaysOnTop: false,

    title: "Counter Desktop",

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // During development
  win.loadURL("http://localhost:3000");
  win.setMenuBarVisibility(false);

  // Uncomment this later for production builds
  // win.loadFile("../out/index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
