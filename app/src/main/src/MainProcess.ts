import * as electron from 'electron';
import { MainWindow } from './MainWindow';

export class MainProcess {
  private readonly app: electron.App;
  private mainWindow: MainWindow | undefined;
  constructor() {
    this.app = electron.app;
  }

  public start(): void {
    this.app.on('activate', this.onActivate);
    this.app.on('ready', this.onReady);
    this.app.on('window-all-closed', this.onWindowAllClose);
  }

  private onActivate = (): void => {
    if (this.mainWindow === undefined) {
      this.createMainWindow();
    }
  };

  private onReady = (): void => {
    this.createMainWindow();
  };

  private onWindowAllClose = (): void => {
    if (process.platform !== 'darwin') {
      this.app.quit();
    }
  };

  private createMainWindow = (): void => {
    this.mainWindow = new MainWindow({
      kiosk: false,
      frame: false,
      center: true,
      height: 1280,
      width: 720,
      minWidth: 1280,
      minHeight: 720,
      webPreferences: {
        nodeIntegration: true,
      },
    });
  };
}
