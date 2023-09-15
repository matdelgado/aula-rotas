import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Produtos from './routes/Produtos/Produtos.jsx'
import Error from './routes/Error/Error.jsx'
import VitrineProdutos from './routes/VitrineProdutos/VitrineProdutos.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <Error/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path: "/produtos",
      element:<Produtos />
    },
    {
      path:"produtos/exibir/:id",
      element: <VitrineProdutos/>
    },
    {
      path: "/antiga",
      element: <Navigate to="/"/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
