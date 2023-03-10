import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as babel from '@babel/core';
import * as fs from 'fs';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const code = fs.readFileSync(
      path.resolve(__dirname, '../db/codeTemplate.js'),
      { encoding: 'utf-8' },
    );
    const result = babel.transform(code, {
      configFile: path.resolve(__dirname, '../config/babel.config.json'),
    });
    return result?.code;
  }
}
