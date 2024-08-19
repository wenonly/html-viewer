interface ViewerData {
  previewHtml?: string;
  files?: {
    fileName: string;
    content: string;
    type: string;
  }[];
}

interface ViewerProps extends ViewerData {
  src?: string;
  // 兼容旧数据
  html?: string;
  js?: string;
  css?: string;
}

interface CreateHtmlViewerOptions extends ViewerProps {
  iframeStyle?: Partial<CSSStyleDeclaration>;
}

export type { ViewerData, ViewerProps, CreateHtmlViewerOptions };
