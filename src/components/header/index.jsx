import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import MenuIcon from '../../assets/icons/menu-icon'

const Header = () => {
  return (
    <div className='Navbar'>
    <div className='NavList' >
    <Link to='/works'  className='NavList__link'>Works</Link>
    <Link to='/blogs' className='NavList__link'>Blog</Link>
    <Link to='/contact' className='NavList__link' >Contact</Link>
    </div>
    <div className = "NavIcon" >{<MenuIcon/>}</div>
    </div>
  )
}

export default Header