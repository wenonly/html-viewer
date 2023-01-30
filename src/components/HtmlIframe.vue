<script setup lang="ts">
import { ref } from 'vue';

interface HtmlIframeProps {
  html?: string;
  javascript?: string;
  css?: string;
}
const props = defineProps<HtmlIframeProps>();
const iframeRef = ref<HTMLIFrameElement>();

const onLoad = () => {
  if (iframeRef.value) {
    const cssDom = document.createElement('style');
    cssDom.innerHTML = props.css ?? '';
    cssDom.id = 'iframe-css';
    const jsDom = document.createElement('script');
    jsDom.innerHTML = props.javascript ?? '';
    jsDom.id = 'iframe-js';
    if (iframeRef.value.contentDocument) {
      iframeRef.value.contentDocument.head.appendChild(cssDom);
      iframeRef.value.contentDocument.body.innerHTML = props.html ?? '';
      iframeRef.value.contentDocument.body.appendChild(jsDom);
    }
  }
};
</script>

<template>
  <iframe
    ref="iframeRef"
    class="result-page"
    style="width: 100%; height: 100%"
    @load="onLoad"
  ></iframe>
</template>
