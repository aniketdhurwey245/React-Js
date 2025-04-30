import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Ani from './Ani.jsx'

createRoot(document.getElementById('root')).render(
  // we can render mainy function by using fragment
  <>
  <Ani/>
  <App/>
  </>
  
   
  
)
