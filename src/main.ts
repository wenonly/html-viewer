import App from './App.vue';
import './assets/css/style.css';
import { createVueIframe } from './utils';

interface createHtmlViewerOptions {}

function createHtmlViewer(options: createHtmlViewerOptions = {}) {
  return createVueIframe(App);
}

export default createHtmlViewer;
