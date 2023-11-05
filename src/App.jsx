import { } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import './styles/base/_geral.css'

function App() {



  return (
    <>
      <Header />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
