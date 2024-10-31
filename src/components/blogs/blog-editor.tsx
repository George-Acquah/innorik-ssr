import { FC, useEffect, useLayoutEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

interface BlogEditorProps {
  readOnly?: boolean;
  defaultValue?: any; // Quill's Delta type or string (for HTML)
  onTextChange?: (delta: any, oldDelta: any, source: any) => void;
  onSelectionChange?: (range: any, oldRange: any, source: any) => void;
  quillRef: Quill | null;
}

const BlogEditor: FC<BlogEditorProps> = ({
  quillRef: ref,
  readOnly = false,
  defaultValue,
  onTextChange,
  onSelectionChange,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const defaultValueRef = useRef(defaultValue);
  const onTextChangeRef = useRef(onTextChange);
  const onSelectionChangeRef = useRef(onSelectionChange);

  useLayoutEffect(() => {
    onTextChangeRef.current = onTextChange;
    onSelectionChangeRef.current = onSelectionChange;
  });

  useEffect(() => {
    if (ref) {
      ref.enable(!readOnly);
    }
  }, [ref, readOnly]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const editorContainer = container.appendChild(
      container.ownerDocument.createElement("div")
    );

    const quill = new Quill(editorContainer, {
      theme: "snow",
      readOnly: readOnly,
    });

    if (ref) {
      ref = quill;
    }

    if (defaultValueRef.current) {
      quill.setContents(defaultValueRef.current);
    }

    quill.on(Quill.events.TEXT_CHANGE, (...args) => {
      if (onTextChangeRef.current) {
        onTextChangeRef.current(...args);
      }
    });

    quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
      if (onSelectionChangeRef.current) {
        onSelectionChangeRef.current(...args);
      }
    });

    return () => {
      if (ref) {
        ref = null;
      }
      container.innerHTML = "";
    };
  }, [readOnly, ref]);

  return <div ref={containerRef}></div>;
};

BlogEditor.displayName = "BlogEditor";

export default BlogEditor;
