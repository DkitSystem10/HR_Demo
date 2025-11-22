import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Suppress browser extension errors in console
const originalError = console.error
console.error = (...args) => {
  // Filter out browser extension errors
  const errorMessage = args[0]?.toString() || ''
  const isExtensionError = 
    errorMessage.includes('utils.js') ||
    errorMessage.includes('tabutils.js') ||
    errorMessage.includes('contextmenu.js') ||
    errorMessage.includes('download.js') ||
    errorMessage.includes('Cannot read properties of undefined') ||
    errorMessage.includes('reading \'onChanged\'') ||
    errorMessage.includes('reading \'onUpdated\'') ||
    errorMessage.includes('reading \'onClicked\'') ||
    errorMessage.includes('reading \'onCreated\'')
  
  if (!isExtensionError) {
    originalError.apply(console, args)
  }
}

// Suppress uncaught errors from browser extensions
window.addEventListener('error', (event) => {
  const errorSource = event.filename || ''
  const errorMessage = event.message || ''
  
  const isExtensionError = 
    errorSource.includes('utils.js') ||
    errorSource.includes('tabutils.js') ||
    errorSource.includes('contextmenu.js') ||
    errorSource.includes('download.js') ||
    errorMessage.includes('Cannot read properties of undefined') ||
    errorMessage.includes('reading \'onChanged\'') ||
    errorMessage.includes('reading \'onUpdated\'') ||
    errorMessage.includes('reading \'onClicked\'') ||
    errorMessage.includes('reading \'onCreated\'')
  
  if (isExtensionError) {
    event.preventDefault()
    return false
  }
}, true)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

