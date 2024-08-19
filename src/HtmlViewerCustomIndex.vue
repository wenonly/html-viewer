<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ViewerProps } from "./commonType";
import { createHtmlViewer } from "./utils/createViewer";
import { omit } from "./utils/utils";

interface CustomViewerProps extends ViewerProps {
  iframeWidth?: string;
  iframeHeight?: string;
  wrapperStyle?: string;
}

const props = defineProps<CustomViewerProps>();
const wrapRef = ref<HTMLElement>();

onMounted(() => {
  const iframe = createHtmlViewer({
    ...omit(props, ["iframeWidth", "iframeHeight", "wrapperStyle"]),
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
