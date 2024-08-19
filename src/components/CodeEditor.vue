<script setup lang="ts">
import { defaultKeymap } from "@codemirror/commands";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView, keymap } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { onMounted, ref, watch } from "vue";
import { getEditorTools } from "../utils/utils";

const themeExts: Record<string, () => ReturnType<typeof javascript>> = {
  html,
  javascript,
  css,
};

const codeWrapper = ref<HTMLDivElement>();
const editor = ref<EditorView>();

const props = defineProps<{
  theme?: "javascript" | "html" | "css" | string;
  modelValue?: string;
}>();
const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

onMounted(() => {
  editor.value = new EditorView({
    parent: codeWrapper.value,
    doc: props.modelValue,
    extensions: [
      EditorView.editable.of(false), // 设置只读
      keymap.of(defaultKeymap),
      basicSetup,
      themeExts[props.theme ?? ""]?.() ?? themeExts.javascript(),
      EditorView.updateListener.of((viewUpdate) => {
        // https://discuss.codemirror.net/t/codemirror-6-proper-way-to-listen-for-changes/2395/11
        // console.log('update', viewUpdate, viewUpdate.docChanged, viewUpdate.focusChanged)
        // doc changed
        if (viewUpdate.docChanged) {
          emit("update:modelValue", viewUpdate.state.doc.toString());
        }
      }),
    ],
  });

  const editorTools = getEditorTools(editor.value);

  watch(
    () => props.modelValue,
    (newValue) => {
      if (newValue !== editorTools.getDoc()) {
        editorTools.setDoc(newValue ?? "");
      }
    }
  );
});
</script>

<template>
  <div ref="codeWrapper" style="width: 100%; height: 100%"></div>
</template>
