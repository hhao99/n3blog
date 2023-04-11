import 'md-editor-rt/lib/style.css'

import MdEditor from 'md-editor-rt'
import { useState } from 'react'

export default function Editor() {
    const [text,setText] = useState('')
  
    return (
        <div>
            
            <MdEditor modelValue={text} onChange={setText} />
 
        </div>
    )
}