import { EditorView } from '@codemirror/view';

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
