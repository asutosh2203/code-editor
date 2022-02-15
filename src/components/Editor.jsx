import Monaco from '@monaco-editor/react'
import { BiCollapse, BiExpand } from 'react-icons/bi'
import React, { useState } from 'react'

const Editor = ({ displayName, language, value, onChange }) => {
  const [open, setOpen] = useState(true)

  const handleChange = (value, event) => {
    onChange(value)
  }
  return (
    <div className={`editor-container ${!open && 'collapsed'}`}>
      <div className='editor-title'>
        {displayName}
        <button className='codeToggleButton' onClick={() => setOpen(!open)}>
          {open ? <BiCollapse fontSize={20} /> : <BiExpand fontSize={20} />}
        </button>
      </div>
      <Monaco
        theme='vs-dark'
        onChange={handleChange}
        className='monaco-wrapper'
        defaultLanguage={language}
        defaultValue={value}
        height='90%'
        options={{
          wordWrap: 'on',
          colorDecorators: true,
          showUnused: true,
          smoothScrolling: true,
          formatOnType: true,
        }}
      />
    </div>
  )
}

export default Editor
