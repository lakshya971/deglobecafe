import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Footer from './components/Footer'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
      <div>
        <Header/>
        <Home/>
        <Footer/>
      </div>
    },
    {
      path: "/About",
      element: 
      <div>
        <Header/>
        <About/>
        <Footer/>
      </div>
    },
    {
      path: "/Contact",
      element: 
      <div>
        <Header/>
        <Contact/>
        <Footer/>
      </div>
    },
    {
      path: "/Menu",
      element: 
      <div>
        <Header/>
        <Menu/>
        <Footer/>
      </div>
    },
  ]
)

const App = () => {
  return (
    <div className='bg-[#161916] min-h-screen text-white font-poppins'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App