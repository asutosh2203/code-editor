import React, { useState, useEffect } from 'react'
import Editor from './components/Editor'
import useLocalStorage from './hooks/useLocalStorage'

const Editors = () => {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [javaScript, setJavaScript] = useLocalStorage('javaScript', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${javaScript}</script>
    </html>
    `)
    }, 500)

    return () => clearTimeout(timeout)
  }, [html, css, javaScript])

  return (
    <>
      <div className='pane top-pane'>
        <Editor
          language='html'
          displayName='HTML'
          value={html}
          onChange={setHtml}
        />
        <Editor
          language='css'
          displayName='CSS'
          value={css}
          onChange={setCss}
        />
        <Editor
          language='javascript'
          displayName='JavaScript'
          value={javaScript}
          onChange={setJavaScript}
        />
      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder='0'
          width={'100%'}
          height={'100%'}
        />
      </div>
    </>
  )
}

export default Editors
