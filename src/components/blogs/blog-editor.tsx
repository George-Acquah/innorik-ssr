import {
  FC,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type QuillType from "quill"; // Import as a type only
import "quill/dist/quill.snow.css";
import { EmitterSource } from "quill/core";

interface BlogEditorProps {
  readOnly?: boolean;
  defaultValue?: any;
  onTextChange?: (delta: string) => void;
  onSelectionChange?: (
    range: any,
    oldRange: any,
    source: EmitterSource
  ) => void;
  quillRef: RefObject<QuillType | null>;
}

const BlogEditor: FC<BlogEditorProps> = ({
  quillRef,
  readOnly = false,
  defaultValue,
  onTextChange,
  onSelectionChange,
}) => {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const defaultValueRef = useRef(defaultValue);
  const onTextChangeRef = useRef(onTextChange);
  const onSelectionChangeRef = useRef(onSelectionChange);

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike", "link"],

    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],

    [{ size: ["small", false, "large", "huge"] }],

    [{ textTransform: [false, "uppercase", "lowercase", "capitalize"] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];

  const formats = [
    "align",
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "background",
    "strike",
    "blockquote",
    "list",
    "indent",
    "color",
    "script",
  ];

  useLayoutEffect(() => {
    onTextChangeRef.current = onTextChange;
    onSelectionChangeRef.current = onSelectionChange;
  }, [onTextChange, onSelectionChange]);

  useEffect(() => {
    const loadQuill = async () => {
      if (quillRef.current) return;

      const { default: Quill } = await import("quill");
      if (!containerRef.current) return;

      const editorContainer = containerRef.current.appendChild(
        containerRef.current.ownerDocument.createElement("div")
      );

      const modules = {
        toolbar: {
          container: toolbarOptions,
          handlers: {
            textTransform: (_opt: any) => {},
          },
        },
        clipboard: {
          matchVisual: false,
        },
      };

      const quill = new Quill(editorContainer, {
        theme: "snow",
        modules,
        formats,
        placeholder: defaultValue,
        readOnly,
      });

      quillRef.current = quill;

      if (defaultValueRef.current) {
        quill.setContents(defaultValueRef.current);
      }

      quill.on("text-change", () => {
        if (onTextChangeRef.current) {
          const htmlContent = quill.root.innerHTML; // Convert to HTML
          onTextChangeRef.current(htmlContent);
        }
      });

      quill.on("selection-change", (...args) => {
        if (onSelectionChangeRef.current) {
          onSelectionChangeRef.current(...args);
        }
      });
    };

    loadQuill();
    setLoading(false);

    return () => {
      quillRef.current = null;
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [quillRef, readOnly]);

  if (loading) {
    return <p>Loading quilll component...</p>;
  }

  return <div ref={containerRef}></div>;
};

BlogEditor.displayName = "BlogEditor";

export default BlogEditor;
