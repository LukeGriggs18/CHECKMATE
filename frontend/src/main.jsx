import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Play from './routes/Play.jsx'
import './index.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/play',
    element: <Play />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

);
