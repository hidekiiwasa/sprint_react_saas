import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './routes/Home'
import Proposta from './routes/Proposta'
import Sobre from './routes/Sobre.jsx'
import Login from './routes/Login.jsx'
import Cadastro from './routes/Cadastro.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children:[
      { path: '/', element: <Home/> },
      { path: '/proposta', element: <Proposta/> },
      { path: '/sobre', element: <Sobre/> },
      { path: '/login', element: <Login/> },
      { path: '/cadastro', element: <Cadastro/> },
      { path: '/', element: <Home/> },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
