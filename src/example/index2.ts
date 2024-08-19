import { createHtmlViewer } from "../utils/createViewer";
import cssCode from "./code/index.css?raw";
import htmlCode from "./code/index.html?raw";
import jsCode from "./code/index.js?raw";
import "reset-css";

const app = document.querySelector("#app");

const htmlViewerIframe = createHtmlViewer({
  html: htmlCode,
  css: cssCode,
  js: jsCode,
  iframeStyle: {
    width: "70%",
  },
});

app?.appendChild(htmlViewerIframe);
