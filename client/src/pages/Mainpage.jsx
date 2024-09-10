import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel/Carousel'
import About from '../components/About'
import Tab from '../components/Tab'

import Footer from '../components/Footer'

import Faq from '../components/Faq/Faq'

const Mainpage = () => {
  return (
    <div>
    <Navbar/>
    <Carousel/>
    <About/>
    <Tab/>
    <Faq/>
    <Footer/>
    </div> )
}

export default Mainpage