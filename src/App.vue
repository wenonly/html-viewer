<script setup lang="ts">
import { ElTabPane, ElTabs } from 'element-plus';
import { ref } from 'vue';
import CodeEditor from './components/CodeEditor.vue';
import HtmlIframe from './components/HtmlIframe.vue';

// import html from './tests/index.html?raw';
// import js from './tests/index.js?raw';
// import css from './tests/index.css?raw';

const tab = ref('result');

interface AppProps {
  html?: string;
  js?: string;
  css?: string;
}

const { html, js, css } = defineProps<AppProps>();
</script>

<template>
  <el-tabs v-model="tab" class="html-tabs">
    <el-tab-pane label="效果" name="result">
      <HtmlIframe :html="html" :javascript="js" :css="css" />
    </el-tab-pane>
    <el-tab-pane label="HTML" name="HTML">
      <CodeEditor theme="html" :value="html" />
    </el-tab-pane>
    <el-tab-pane label="CSS" name="CSS">
      <CodeEditor theme="css" :value="css" />
    </el-tab-pane>
    <el-tab-pane label="JavaScript" name="JavaScript">
      <CodeEditor theme="javascript" :value="js" />
    </el-tab-pane>
  </el-tabs>
</template>
