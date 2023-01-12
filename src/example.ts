import createHtmlViewer from './main';

const app = document.querySelector('#app');

const htmlViewerIframe = createHtmlViewer();
app?.appendChild(htmlViewerIframe);
