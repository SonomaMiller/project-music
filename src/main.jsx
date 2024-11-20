import { createRoot } from 'react-dom/client'
import './css/style.css'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
