import 'md-editor-rt/lib/style.css'

import MdEditor from 'md-editor-rt'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

const author = 'Eric Hao'
const date = new Date()
const initial_md_content = `---
title: blog title
author: ${author}
date: ${date.toDateString()}
---

# new blog
welcome
`

export default function Editor() {
    const [text,setText] = useState(initial_md_content)
    const [msg,setMsg] = useState('')
    const { data: session, status } = useSession()
    const handleSave = ()=> {
        const reqParams = {
            md: {
                content: text
            }
        }
        //savePost(text)
        fetch('/api/savepost',{
            method: "POST",
            headers: {
                "Content-Type": "application/text"
            },
            body: text
        })
            .then( res => res.json())
            .then( data => {
                console.log(data)
                setMsg(data.msg)
            })
    }
  
    if( status === 'unauthenticated') {
        return (
            <div>
                <h1>Only authorized use can login to this page!</h1>
            </div>
        )
    }
    return (
        <div>
            
            <MdEditor modelValue={text} onChange={setText} />
            <button onClick={handleSave} className='btn btn-primary'>Save</button>
            <h5>{msg}</h5>
        </div>
    )
}