import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './style/GlobalStyle.js'
import Routes from './routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <>
        <GlobalStyle></GlobalStyle>
        <Routes />
      </>
  </React.StrictMode>,
)
