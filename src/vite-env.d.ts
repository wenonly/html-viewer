/// <reference types="vite/client" />

interface Window {
  htmlViewerConfig?: {
    iframeStyle?: CSSStyleDeclaration;
    hooks?: Record<string, (...args: any[]) => void>;
  };
}
