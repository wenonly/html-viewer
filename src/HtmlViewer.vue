<script setup lang="ts">
import { ElTabPane, ElTabs, vLoading } from "element-plus";
import { readJsonpData } from "jsonp-data/lib/read.browser";
import { onMounted, reactive, ref, defineOptions } from "vue";
import { ViewerData, ViewerProps } from "./commonType";
import CodeEditor from "./components/CodeEditor.vue";
import HtmlIframe from "./components/HtmlIframe.vue";
import { loadZipHtmlCode } from "./utils/utils";

defineOptions({
  directives: {
    vLoading,
  },
});

const tab = ref("result");
const loading = ref(false);

const props = defineProps<ViewerProps>();
const data = reactive<ViewerProps>({
  previewHtml: props.previewHtml,
  files: props.files ? JSON.parse(JSON.stringify(props.files)) : undefined,
  // 兼容旧数据,
  html: props.html,
  css: props.css,
  js: props.js,
});

onMounted(async () => {
  loading.value = true;
  try {
    if (props.src?.endsWith(".js")) {
      const viewerData = await readJsonpData<ViewerData>(props.src);
      data.previewHtml = viewerData.html;
      data.files = viewerData.files;
    } else if (props.src?.includes(".zip")) {
      // 兼容旧的方式
      const result = await loadZipHtmlCode(props.src);
      data.html = result.html;
      data.css = result.css;
      data.js = result.js;
      data.files = [
        {
          fileName: "index.html",
          content: data.html || "",
          type: "html",
        },
        {
          fileName: "index.css",
          content: data.css || "",
          type: "css",
        },
        {
          fileName: "index.js",
          content: data.js || "",
          type: "js",
        },
      ];
    }
  } catch (error) {
    console.error(error);
  }
  loading.value = false;
});
</script>

<template>
  <el-tabs v-loading="loading" v-model="tab" class="html-tabs">
    <el-tab-pane label="效果" name="result">
      <HtmlIframe v-if="data.previewHtml" :previewHtml="data.previewHtml" />
      <HtmlIframe
        v-else
        :html="data.html"
        :javascript="data.js"
        :css="data.css"
      />
    </el-tab-pane>
    <el-tab-pane
      v-for="(item, index) of data.files"
      :key="index"
      :label="item.fileName"
      :name="item.fileName"
    >
      <CodeEditor
        :theme="item.type === 'js' ? 'javascript' : item.type"
        v-model="item.content"
      />
    </el-tab-pane>
  </el-tabs>
</template>
