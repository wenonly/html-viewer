interface createHtmlViewerOptions {
    html?: string[] | string;
    js?: string[] | string;
    css?: string[] | string;
    src?: string;
    iframeStyle?: Partial<CSSStyleDeclaration>;
}
export declare function createHtmlViewer(options?: createHtmlViewerOptions): HTMLIFrameElement;
export declare const HtmlViewerIndexCustom: import("vue").VueElementConstructor<{}>;
export {};
