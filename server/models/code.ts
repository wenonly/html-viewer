import * as babel from '@babel/core';
import * as fs from 'fs';
import * as path from 'path';
import { generate } from 'shortid';
import { base64_encode } from 'utils/base64';
import DB from './core/db';

interface CodeConfigType {
  id: string;
  codeFileName?: string;
  title?: string;
}

export interface CodeType extends CodeConfigType {
  html?: string;
  css?: string;
  js?: string;
}

class Code extends DB {
  private codeFolder = path.resolve(this.dbFolderPath, 'code');
  private codeListFile = path.resolve(this.dataFolderPath, 'codeList.json');
  private codeTemplateFile = path.resolve(this.dbFolderPath, 'codeTemplate.js');

  private codeList: CodeConfigType[] = [];
  private codeListIdMap = new Map<string, CodeConfigType>();
  constructor() {
    super();
    if (!fs.existsSync(this.codeFolder)) fs.mkdirSync(this.codeFolder);
    this.initCodeList();
  }

  private initCodeList() {
    if (!fs.existsSync(this.codeListFile))
      fs.writeFileSync(this.codeListFile, '[]', { encoding: 'utf-8' });
    const fileString = fs.readFileSync(this.codeListFile, {
      encoding: 'utf-8',
    });
    this.codeList = JSON.parse(fileString);
    this.codeList.forEach((item) => {
      this.codeListIdMap.set(item.id, item);
    });
  }

  // 同步内存数据到文件
  private syncDataToFile() {
    this.codeList = [...this.codeListIdMap.values()];
    fs.writeFileSync(this.codeListFile, JSON.stringify(this.codeList), {
      encoding: 'utf-8',
    });
  }

  public list() {
    return this.codeList;
  }

  public get(id: string) {
    return this.codeListIdMap.get(id);
  }

  public delete(id: string) {
    const code = this.codeListIdMap.get(id);
    fs.rmSync(path.resolve(this.codeFolder, code.codeFileName));
    this.codeListIdMap.delete(id);
    this.syncDataToFile();
  }

  public add(code: Omit<CodeType, 'id'>) {
    const codeJsContent = this.createCodeJsContent(code);
    const id = generate();
    const codeFileName = `${id}.js`;
    fs.writeFileSync(
      path.resolve(this.codeFolder, codeFileName),
      codeJsContent,
    );
    const newCode: CodeConfigType = {
      id,
      codeFileName,
      title: code.title,
    };
    this.codeListIdMap.set(newCode.id, newCode);
    this.syncDataToFile();
  }

  private createCodeJsContent(code: Omit<CodeType, 'id'>) {
    let template = fs.readFileSync(this.codeTemplateFile, {
      encoding: 'utf-8',
    });
    template = template.replace('<<html>>', base64_encode(code.html));
    template = template.replace('<<css>>', base64_encode(code.css));
    template = template.replace('<<js>>', base64_encode(code.js));
    const result = babel.transform(template, {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              edge: '17',
              firefox: '60',
              chrome: '67',
              safari: '11.1',
            },
          },
        ],
      ],
      plugins: ['@babel/plugin-transform-modules-umd'],
    });
    return result?.code;
  }
}

const code = new Code();

export default code;
