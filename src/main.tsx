import React from 'react'  
import ReactDOM from 'react-dom/client'  
import App from './App'  
import 'antd/dist/reset.css' // 引入 Ant Design 样式  

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(  
  <React.StrictMode>  
    <App />  
  </React.StrictMode>  
)