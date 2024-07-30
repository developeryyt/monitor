import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const $root= document.getElementById('root')

createRoot($root).render(
  <>
    <App />
  </>,
)
