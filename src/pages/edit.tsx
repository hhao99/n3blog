import MDEditor from "@uiw/react-md-editor";
import { useState } from 'react'
export default function Editor() {
    const [content,setContent] = useState<>('# Hello \n **hello world**')
    return (
        <div>
            <MDEditor value={content} onChange={setContent}/>
        </div>
    )
}