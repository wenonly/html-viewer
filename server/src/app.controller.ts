import { Body, Controller, Post } from '@nestjs/common';
import code, { CodeType } from 'models/code';
import { AppService } from './app.service';

@Controller('/code')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/add')
  addCode(@Body() body: CodeType) {
    code.add({
      html: body.html,
      css: body.css,
      js: body.js,
    });
    return body;
  }
}
