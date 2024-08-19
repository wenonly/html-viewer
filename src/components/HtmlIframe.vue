<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const props = defineProps<{
  previewHtml?: string;
  html?: string;
  javascript?: string;
  css?: string;
}>();
const iframeWrapRef = ref<HTMLIFrameElement>();

const createIframe = () => {
  const iframe = document.createElement("iframe");
  iframe.style.height = "100%";
  iframe.style.width = "100%";

  if (props.previewHtml) {
    const html = props.previewHtml
    iframe.onload = () => {
      const doc = iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(html);
        doc.close();
      }
    }
  } else {
    iframe.onload = () => {
      const cssDom = document.createElement("style");
      cssDom.innerHTML = props.css ?? "";
      cssDom.id = "iframe-css";
      const jsDom = document.createElement("script");
      jsDom.innerHTML = props.javascript ?? "";
      jsDom.id = "iframe-js";
      if (iframe.contentDocument) {
        iframe.contentDocument.head.appendChild(cssDom);
        iframe.contentDocument.body.innerHTML = props.html ?? "";
        iframe.contentDocument.body.appendChild(jsDom);
      }
    };
  }


  return iframe;
};

onMounted(() => {
  if (iframeWrapRef.value) {
    let iframe = createIframe();
    iframeWrapRef.value.appendChild(iframe);

    watch(
      () => [props.html, props.javascript, props.css].join(),
      (v) => {
        if (iframeWrapRef.value) {
          iframeWrapRef.value.removeChild(iframe);
          iframe = createIframe();
          iframeWrapRef.value.appendChild(iframe);
        }
      }
    );
  }
});
</script>

<template>
  <div ref="iframeWrapRef" style="width: 100%; height: 100%"></div>
</template>
