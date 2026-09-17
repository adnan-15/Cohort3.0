import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'

createRoot(document.getElementById('root')).render(
    [<App property="ye props hai"><h1>h1 in main</h1></App>,
        <About width="456" place="About prop"/>
    ]
)
