import '@uiw/react-md-editor/markdown-editor.css'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import dynamic from "next/dynamic";
import { useState } from 'react'

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
  );
  const EditorMarkdown = dynamic(
    () =>
      import("@uiw/react-md-editor").then((mod) => {
        return mod.default.Markdown;
      }),
    { ssr: false }
  );
export default function Editor() {
    const initialContent = `
    # A demo a markdown
    this is basic demo of the markedown editor
    * add one line
    * add two line
    * add three line
    ("https://www.github.com")[full reference please search @uid/react-md-editor]
    `
    const [content,setContent] = useState<string>(initialContent)
    return (
        <div data-color-mode='dark'>
            <MDEditor value={content} 
                onChange={setContent}/>
            <div style={{ paddingTop: 50}}>
                <EditorMarkdown source={content} />
            </div>
        </div>
    )
}