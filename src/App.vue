<script setup lang="ts">
import { ElTabPane, ElTabs } from 'element-plus';
import { ref } from 'vue';
import CodeEditor from './components/CodeEditor.vue';
import HtmlIframe from './components/HtmlIframe.vue';

const tab = ref('result');
</script>

<template>
  <el-tabs v-model="tab" class="html-tabs" type="card">
    <el-tab-pane label="效果" name="result">
      <html-iframe />
    </el-tab-pane>
    <el-tab-pane label="HTML" name="HTML">
      <code-editor />
    </el-tab-pane>
    <el-tab-pane label="CSS" name="CSS">CSS</el-tab-pane>
    <el-tab-pane label="JavaScript" name="JavaScript">JavaScript</el-tab-pane>
  </el-tabs>
</template>
