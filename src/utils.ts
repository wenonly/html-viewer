import { EditorView } from "@codemirror/view";
import axios from "axios";
import { loadAsync } from "jszip";
import { generate } from "shortid";
import { createApp } from "vue";

export interface CreateVueIframeOptions {
  iframeStyle?: Partial<CSSStyleDeclaration>;
  stylesCss?: string[];
}

// 生成 mount vue dom 的iframe element
export function createVueIframe(
  rootComponent: Parameters<typeof createApp>[0],
  rootProps?: Parameters<typeof createApp>[1],
  options: CreateVueIframeOptions = {}
) {
  const iframe = document.createElement("iframe");
  const app = document.createElement("div");
  app.id = "html-app-" + generate();
  app.className = "html-root";
  iframe.style.boxSizing = "border-box";
  iframe.style.border = "1px solid #e4e7ed";
  Object.assign(
    iframe.style,
    {
      width: "100%",
      height: "500px",
    },
    options.iframeStyle
  );

  iframe.onload = () => {
    options.stylesCss?.forEach((css) => {
      const style = document.createElement("style");
      style.innerHTML = css;
      iframe.contentDocument?.head.appendChild(style);
    });
    iframe.contentDocument?.body.appendChild(app);
    createApp(rootComponent, rootProps).mount(app);
  };
  return iframe;
}

export function callHook(hook: string, ...args: any[]) {
  if (window.htmlViewerConfig?.hooks?.[hook] instanceof Function) {
    window.htmlViewerConfig?.hooks?.[hook](...args);
  }
}

/**
 * 加载zip并返回 code
 * zip 格式：
 *  - folder
 *    |- index.html
 *    |- index.css
 *    |- index.js
 * @param url zip文件地址
 * @returns { html, css, js }
 */
export const loadZipHtmlCode = (
  url: string
): Promise<{
  html?: string;
  css?: string;
  js?: string;
}> => {
  return axios.get(url, { responseType: "blob" }).then((res) => {
    if (res.status !== 200) {
      console.error("request html filePath error");
      return {};
    }
    return loadAsync(res.data)
      .then((zip) => {
        const filesName = Object.keys(zip.files);
        const filesMap = Object.fromEntries(
          filesName.map((filePath) => {
            const key = filePath.includes("index.html")
              ? "html"
              : filePath.includes("index.css")
              ? "css"
              : filePath.includes("index.js")
              ? "js"
              : "codeFolder";
            return [key, filePath];
          })
        );
        return Promise.all([
          zip.file(filesMap.html)?.async("string"),
          zip.file(filesMap.css)?.async("string"),
          zip.file(filesMap.js)?.async("string"),
        ]);
      })
      .then(([html, css, js]) => {
        return {
          html,
          css,
          js,
        };
      });
  });
};

// loadZipHtmlCode('http://localhost:5173/code.zip');

export const getEditorTools = (view: EditorView) => {
  // doc state
  const getDoc = () => view.state.doc.toString();
  const setDoc = (newDoc: string) => {
    if (newDoc !== getDoc()) {
      view.dispatch({
        changes: {
          from: 0,
          to: view.state.doc.length,
          insert: newDoc,
        },
      });
    }
  };
  return {
    getDoc,
    setDoc,
  };
};
