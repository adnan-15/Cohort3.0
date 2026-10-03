import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TestComponents from './TestComponents.jsx'

createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <TestComponents />
    </ContextProvider>
)
