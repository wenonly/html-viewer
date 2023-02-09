import ecss from 'element-plus/dist/index.css?raw';
import resetCss from 'reset-css/reset.css?raw';
import App from './App.vue';
import globalCss from './assets/css/style.css?raw';
import { createVueIframe } from './utils';

interface createHtmlViewerOptions {
  html?: string[] | string;
  javascript?: string[] | string;
  css?: string[] | string;
  width?: string;
  height?: string;
}

export function createHtmlViewer(options: createHtmlViewerOptions = {}) {
  return createVueIframe(
    App,
    {
      html:
        options.html instanceof Array ? options.html.join('\n') : options.html,
      css: options.css instanceof Array ? options.css.join('\n') : options.css,
      js:
        options.javascript instanceof Array
          ? options.javascript.join('\n')
          : options.javascript,
    },
    {
      width: options.width ?? '100%',
      height: options.height ?? '600px',
      stylesCss: [resetCss, ecss, globalCss],
    }
  );
}
