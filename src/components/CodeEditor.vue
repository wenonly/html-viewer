<script setup lang="ts">
import { defaultKeymap } from '@codemirror/commands';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView, keymap } from '@codemirror/view';
import { basicSetup } from 'codemirror';
import { onMounted, ref } from 'vue';

interface CodeEditorProps {
  theme?: 'javascript' | 'html' | 'css';
  value?: string;
}

const themeExts = {
  html,
  javascript,
  css,
};

const codeWrapper = ref<HTMLDivElement>();
const editor = ref<EditorView>();

const props = defineProps<CodeEditorProps>();
const code = ref(props.value);

onMounted(() => {
  editor.value = new EditorView({
    parent: codeWrapper.value,
    doc: code.value,
    extensions: [
      keymap.of(defaultKeymap),
      basicSetup,
      props.theme ? themeExts[props.theme]() : themeExts.javascript(),
    ],
  });
});
</script>

<template>
  <div ref="codeWrapper" style="width: 100%; height: 100%"></div>
</template>
