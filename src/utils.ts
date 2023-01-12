import { generate } from 'shortid';
import { createApp } from 'vue';

// 生成 mount vue dom 的iframe element
export function createVueIframe(...args: Parameters<typeof createApp>) {
  const iframe = document.createElement('iframe');
  const app = document.createElement('div');
  app.id = 'html-app-' + generate();
  iframe.setAttribute('frameborder', '1');
  iframe.style.width = '100%';
  iframe.style.height = '300px';
  iframe.onload = () => {
    iframe.contentDocument?.body.appendChild(app);
    createApp(args[0], args[1]).mount(app);
  };
  return iframe;
}
