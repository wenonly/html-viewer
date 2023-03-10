import * as fs from 'fs';
import * as path from 'path';

class DB {
  protected dbFolderPath = path.resolve(process.cwd(), 'db');
  protected dataFolderPath = path.resolve(this.dbFolderPath, 'data');
  constructor() {
    if (!fs.existsSync(this.dbFolderPath)) {
      fs.mkdirSync(this.dbFolderPath);
    }
    if (!fs.existsSync(this.dataFolderPath)) {
      fs.mkdirSync(this.dataFolderPath);
    }
  }
}

export default DB;
