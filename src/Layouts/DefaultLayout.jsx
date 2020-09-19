import React from 'react'
import Navbar from '../Components/Navbar'



export default (prop) => (
  <>
    <Navbar />
    {prop.children}
  </>
)