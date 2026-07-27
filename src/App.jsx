import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Body from "./components/body"
import Carrer from './components/body/carrer'
import Contact from './components/body/contact'
import SubNavbar from './components/body/SubNavbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Body/>
      <Carrer/>
      <Contact/>
      <SubNavbar/>
      <Footer />
    </div>
  )
}

export default App
