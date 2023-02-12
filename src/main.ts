// import elementCss from 'element-plus/dist/index.css?raw';
import resetCss from "reset-css/reset.css?raw";
import App from "./App.vue";
import miniElementCss from "./assets/css/miniElement.css?raw";
import globalCss from "./assets/css/style.css?raw";
import { createVueIframe } from "./utils";

interface createHtmlViewerOptions {
  html?: string[] | string;
  js?: string[] | string;
  css?: string[] | string;
  iframeStyle?: CSSStyleDeclaration;
}

export function createHtmlViewer(options: createHtmlViewerOptions = {}) {
  return createVueIframe(
    App,
    {
      html:
        options.html instanceof Array ? options.html.join("\n") : options.html,
      css: options.css instanceof Array ? options.css.join("\n") : options.css,
      js: options.js instanceof Array ? options.js.join("\n") : options.js,
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
