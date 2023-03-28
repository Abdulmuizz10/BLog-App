import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <h1>The Daily Blog</h1>
        </div>
        <div className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">New Blog</Link></li>
        </div>
    </div>
  )
}

export default Navbar