<script setup lang="ts">
import { ElTabPane, ElTabs } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';
import CodeEditor from '../components/CodeEditor.vue';
import HtmlIframe from '../components/HtmlIframe.vue';
import { loadZipHtmlCode } from './utils';

// import css from "./tests/index.css?raw";
// import html from "./tests/index.html?raw";
// import js from "./tests/index.js?raw";

const tab = ref('result');

interface AppProps {
  html?: string;
  js?: string;
  css?: string;
  src?: string;
}

const props = defineProps<AppProps>();
const data = reactive({
  html: props.html,
  css: props.css,
  js: props.js,
});

onMounted(() => {
  if (props.src?.includes('.zip')) {
    loadZipHtmlCode(props.src).then((result) => {
      data.html = result.html;
      data.css = result.css;
      data.js = result.js;
    });
  }
});
</script>

<template>
  <el-tabs v-model="tab" class="html-tabs">
    <el-tab-pane label="效果" name="result">
      <HtmlIframe :html="data.html" :javascript="data.js" :css="data.css" />
    </el-tab-pane>
    <el-tab-pane label="HTML" name="HTML">
      <CodeEditor theme="html" v-model="data.html" />
    </el-tab-pane>
    <el-tab-pane label="CSS" name="CSS">
      <CodeEditor theme="css" v-model="data.css" />
    </el-tab-pane>
    <el-tab-pane label="JavaScript" name="JavaScript">
      <CodeEditor theme="javascript" v-model="data.js" />
    </el-tab-pane>
  </el-tabs>
</template>
