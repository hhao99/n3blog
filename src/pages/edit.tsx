import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);
export default function Editor() {
    const initialContent = `
 ** simple markdown editor **
 `
    const [content,setContent] = useState<string>(initialContent)
    return (
        <div data-color-mode='light'>
            <MDEditor value={content} 
                onChange={setContent}
                />
            
        </div>
    )
}