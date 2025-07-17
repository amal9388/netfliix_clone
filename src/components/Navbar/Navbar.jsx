import React, { use, useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import {logout} from '../../firbase'

const Navbar = () => {

  const navref = useRef()

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >=80){
        navref.current.classList.add('nav-dark')
      }
      else{
        navref.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navref} className='Navbar'>
      <div className='Navbar_left'>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse by language</li>
        </ul>
      </div>
      <div className='Navbar_right'>
        <img src={search_icon} alt="" className='icons'/>
        <p>children</p>
        <img src={bell_icon} alt="" className='icons'/>
        <div className='Navbar_profile'>
          <img src={profile_img} alt="" className='profile'/>
          <img src={caret_icon} alt=""/>
          <div className='dropdown'>
            <p onClick={()=>{logout()}}>Signout of netflix</p>
          </div> 
        </div>

      </div>
    </div>
  )
}

export default Navbar
