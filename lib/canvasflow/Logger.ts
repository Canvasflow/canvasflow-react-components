export class Logger {
  prefix: string;
  colors: Colors;
  constructor(prefix: string, colors?: Colors) {
    this.prefix = prefix;
    this.colors = {
      log: colors?.log || "#bf5af2",
      info: colors?.info || "#fed709",
      debug: colors?.debug || "#5e5ce6",
      error: colors?.error || "#ff375f",
    };
  }
  log(...msg: any) {
    const color = "#bf5af2";
    console.log(`%c${this.prefix}`, Logger.logStyle(color), ...msg);
  }
  info(...msg: any) {
    const color = "#fed709";
    console.info(`%c${this.prefix}`, Logger.logStyle(color), ...msg);
  }

  debug(...msg: any) {
    const color = "#5e5ce6";
    console.info(`%c${this.prefix}`, Logger.logStyle(color), ...msg);
  }

  error(...msg: any) {
    const color = "#ff375f";
    console.info(`%c${this.prefix}`, Logger.logStyle(color), ...msg);
  }
  static logStyle(color: string) {
    return `color: white; background: ${color}; border-radius: 6px; padding: 2px 12px;`;
  }
}

interface Colors {
  log?: string;
  info?: string;
  debug?: string;
  error?: string;
}
