import { generate } from 'shortid';
import { createApp } from 'vue';

// 生成 mount vue dom 的iframe element
export function createVueIframe(
  rootComponent: Parameters<typeof createApp>[0],
  rootProps?: Parameters<typeof createApp>[1],
  options: {
    width?: string;
    height?: string;
    stylesCss?: string[];
  } = {}
) {
  const iframe = document.createElement('iframe');
  const app = document.createElement('div');
  app.id = 'html-app-' + generate();
  app.className = 'html-root';
  iframe.style.width = options.width ? options.width : '100%';
  iframe.style.height = options.height ? options.height : '300px';

  iframe.onload = () => {
    options.stylesCss?.forEach((css) => {
      const style = document.createElement('style');
      style.innerHTML = css;
      iframe.contentDocument?.head.appendChild(style);
    });
    iframe.contentDocument?.body.appendChild(app);
    createApp(rootComponent, rootProps).mount(app);
  };
  return iframe;
}
