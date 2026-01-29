import React from 'react'
import Nav from './Nav'
import '../styles/header.css'

function Header() {
  return (
   <header>
    <Nav />
    <div className="zero__glitch_container">
      <div className="zero__glitch_inner">
        <small>
          Trade Synthetic derivatives with
        </small>

        <h1>
          Zero Glitch
        </h1>

        <div className="zero__glitch_button">
          <button>
            Get Started
          </button>
        </div>
      </div> 
    </div>
    {/* <p>This is DSE Cohort 3.0, and we are killin' it with react...🚀🚀🚀</p> */}
   </header>
  )
}

export default Header