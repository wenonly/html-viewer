import { generate } from 'shortid';
import { createApp } from 'vue';

export interface CreateVueIframeOptions {
  iframeStyle?: CSSStyleDeclaration;
  stylesCss?: string[];
}

// 生成 mount vue dom 的iframe element
export function createVueIframe(
  rootComponent: Parameters<typeof createApp>[0],
  rootProps?: Parameters<typeof createApp>[1],
  options: CreateVueIframeOptions = {}
) {
  const iframe = document.createElement('iframe');
  const app = document.createElement('div');
  app.id = 'html-app-' + generate();
  app.className = 'html-root';
  iframe.style.boxSizing = 'border-box';
  iframe.style.border = '1px solid #e4e7ed';
  Object.assign(
    iframe.style,
    {
      width: '100%',
      height: '500px',
    },
    options.iframeStyle
  );

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
