// import elementCss from 'element-plus/dist/index.css?raw';
import resetCss from 'reset-css/reset.css?raw';
import { defineCustomElement } from 'vue';
import miniElementCss from './css/miniElement.css?raw';
import globalCss from './css/style.css?raw';
import HtmlViewer from './HtmlViewer.vue';
import HtmlViewerIndex from './HtmlViewerCustomIndex.vue';
import { createVueIframe } from './utils';

interface createHtmlViewerOptions {
  html?: string[] | string;
  js?: string[] | string;
  css?: string[] | string;
  src?: string;
  iframeStyle?: Partial<CSSStyleDeclaration>;
}

export function createHtmlViewer(options: createHtmlViewerOptions = {}) {
  return createVueIframe(
    HtmlViewer,
    {
      html:
        options.html instanceof Array ? options.html.join('\n') : options.html,
      css: options.css instanceof Array ? options.css.join('\n') : options.css,
      js: options.js instanceof Array ? options.js.join('\n') : options.js,
      src: options.src,
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

export const HtmlViewerIndexCustom = defineCustomElement(HtmlViewerIndex);

if (!customElements.get('html-viewer')) {
  customElements.define('html-viewer', HtmlViewerIndexCustom);
}
