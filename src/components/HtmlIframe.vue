<script setup lang="ts">
import { onMounted, ref } from 'vue';
import html from '../tests/index.html?raw';
import js from '../tests/index.js?raw';
import css from '../tests/index.css?raw';

interface IProps {
  html?: string;
  javascript?: string;
  css?: string;
}
const props = defineProps<IProps>();
const iframeRef = ref<HTMLIFrameElement>();

const onLoad = () => {
  if (iframeRef.value) {
    const cssDom = document.createElement('style');
    cssDom.innerHTML = css;
    const jsDom = document.createElement('script');
    jsDom.innerHTML = js;
    if (iframeRef.value.contentDocument) {
      iframeRef.value.contentDocument.head.appendChild(cssDom);
      iframeRef.value.contentDocument.body.innerHTML = html;
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
