<script setup lang="ts">
import { onMounted, ref } from "vue";
import { createHtmlViewer } from ".";

const props = defineProps<{
  src?: string;
  iframeWidth?: string;
  iframeHeight?: string;
  wrapperStyle?: string;
}>();
const wrapRef = ref<HTMLElement>();

onMounted(() => {
  const iframe = createHtmlViewer({
    src: props.src,
    iframeStyle: {
      width: props.iframeWidth,
      height: props.iframeHeight,
    },
  });
  wrapRef.value?.appendChild(iframe);
});
</script>

<template>
  <div ref="wrapRef" :style="props.wrapperStyle"></div>
</template>
