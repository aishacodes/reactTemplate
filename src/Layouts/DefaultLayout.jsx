import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'



export default (prop) => (
  <>
    <Navbar />
    {prop.children}
    <Footer />
  </>
)