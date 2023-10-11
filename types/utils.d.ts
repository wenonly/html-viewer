import { EditorView } from "@codemirror/view";
import { createApp } from "vue";
export interface CreateVueIframeOptions {
    iframeStyle?: Partial<CSSStyleDeclaration>;
    stylesCss?: string[];
}
export declare function createVueIframe(rootComponent: Parameters<typeof createApp>[0], rootProps?: Parameters<typeof createApp>[1], options?: CreateVueIframeOptions): HTMLIFrameElement;
export declare function callHook(hook: string, ...args: any[]): void;
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
export declare const loadZipHtmlCode: (url: string) => Promise<{
    html?: string;
    css?: string;
    js?: string;
}>;
export declare const getEditorTools: (view: EditorView) => {
    getDoc: () => string;
    setDoc: (newDoc: string) => void;
};
