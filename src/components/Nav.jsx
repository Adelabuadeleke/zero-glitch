import React from 'react'
import ZeroglitchLogo from '../assets/zero_glitch_logo.svg'
import '../styles/nav.css'

function Nav() {
 return (
  <nav>
   <img src={ZeroglitchLogo} alt="zero glitch logo" />

   <div className="nav__links_outer">
    <div className="nav__links_inner">
     <a href="">
      About
     </a>

     <a href="">
      Docs
     </a>

     <a href="">
      Participate
     </a>

     <a href="">
      Blog
     </a>
    </div>
   </div>

   <button>Get started</button>
  </nav>
 )
}

export default Nav