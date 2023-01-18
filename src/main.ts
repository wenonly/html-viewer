import ecss from 'element-plus/dist/index.css?raw';
import resetCss from 'reset-css/reset.css?raw';
import App from './App.vue';
import globalCss from './assets/css/style.css?raw';
import { createVueIframe } from './utils';

interface createHtmlViewerOptions {}

function createHtmlViewer(options: createHtmlViewerOptions = {}) {
  return createVueIframe(
    App,
    {},
    {
      width: '600px',
      stylesCss: [resetCss, ecss, globalCss],
    }
  );
}

export default createHtmlViewer;
