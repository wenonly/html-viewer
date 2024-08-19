import resetCss from "reset-css/reset.css?raw";
import { CreateHtmlViewerOptions } from "../commonType";
import miniElementCss from "../css/miniElement.css?raw";
import globalCss from "../css/style.css?raw";
import HtmlViewer from "../HtmlViewer.vue";
import { createVueIframe, omit } from "./utils";

export function createHtmlViewer(options: CreateHtmlViewerOptions = {}) {
  return createVueIframe(HtmlViewer, omit(options, ["iframeStyle"]), {
    stylesCss: [resetCss, miniElementCss, globalCss],
    iframeStyle: Object.assign(
      {},
      window.htmlViewerConfig?.iframeStyle,
      options.iframeStyle
    ),
  });
}
