// import elementCss from 'element-plus/dist/index.css?raw';
import resetCss from 'reset-css/reset.css?raw';
import App from './App.vue';
import miniElementCss from './assets/css/miniElement.css?raw';
import globalCss from './assets/css/style.css?raw';
import { callHook, createVueIframe } from './utils';

interface createHtmlViewerOptions {
  html?: string[] | string;
  javascript?: string[] | string;
  css?: string[] | string;
  iframeStyle?: CSSStyleDeclaration;
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
      stylesCss: [resetCss, miniElementCss, globalCss],
      iframeStyle: Object.assign(
        {},
        window.htmlViewerConfig?.iframeStyle,
        options.iframeStyle
      ),
    }
  );
}

callHook('ready');
