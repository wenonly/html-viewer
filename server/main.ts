import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import * as babel from '@babel/core'
import fs from 'fs'
const __dirname = path.resolve();

async function createServer() {
  const app = express();

  // 以中间件模式创建 Vite 服务器
  const vite = await createViteServer({
    configFile: 'configs/vite.server.config.ts',
    server: { middlewareMode: true },
    appType: 'spa', // 不引入 Vite 默认的 HTML 处理中间件
  });
  // 将 vite 的 connect 实例作中间件使用
  // app.use(vite.middlewares);

  //   app.use('*', async (req, res) => {
  //     // 如果 `middlewareMode` 是 `'ssr'`，应在此为 `index.html` 提供服务.
  //     // 如果 `middlewareMode` 是 `'html'`，则此处无需手动服务 `index.html`
  //     // 因为 Vite 自会接管
  //     // console.log('---')
  //   })

  app.use('*', (req, res) => {
    const code = fs.readFileSync(path.resolve(__dirname, './server/db/codeTemplate.js'), {encoding: 'utf-8'})
    const result = babel.transform(code, {
      configFile: path.resolve(__dirname, './server/babel.config.json')
    })
    res.send(result?.code)
  })

  app.listen(8081);
}

createServer();
