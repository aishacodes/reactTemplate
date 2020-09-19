import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

export default () => {

const routes = [
  {route:'/home', name: 'Home' },
  {route:'/about', name: 'About' },
  {route:'/contact', name: 'Contact' },
  {route:'/login', name: 'Login' },
  {route:'/signup', name: 'Signup' },
]

  return (
    <nav>
      {
        routes.map(({route, name}, routeIndex) =>(
      <Link className="link" to={route} key={`navbar-to-${routeIndex}`}>{name}</Link>)
        )}
    </nav>
  )
}
