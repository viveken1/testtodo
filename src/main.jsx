import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import addstore from './REDUX/AddStore.js'
import './bootstrap.min.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   
   <Provider store={addstore}>
     <App />
     </Provider> 
    </BrowserRouter>
  </React.StrictMode>,
)
