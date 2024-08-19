import { defineCustomElement } from "vue";
import HtmlViewerIndex from "./HtmlViewerCustomIndex.vue";

export { HtmlViewerIndex as HtmlViewer };

// 注册 web component
if (typeof customElements !== 'undefined') {
  if (!customElements.get("html-viewer")) {
    const HtmlViewerCustomIndex = defineCustomElement(HtmlViewerIndex);
    customElements.define("html-viewer", HtmlViewerCustomIndex);
  }
}
