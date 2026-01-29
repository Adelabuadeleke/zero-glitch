import React from 'react'
import '../styles/Subscribe.css'

function Subscribe() {
  return (
   <section className='subscribe'>
    <div className='subscribe_inner'>
     <img src="../subscribe_leave.png" alt="" />
     <div className='subscribe_form'>
      <h2>Subscribe for Updates</h2>

      <p>Keep up with the latest from Zero Glitch</p>

      <input type="text" placeholder='Enter your name'/>

      <input type="text" placeholder='Enter your e-mail address'/>

      <button>
       Subscribe
      </button>

     </div>
    </div>
   </section>
  )
}

export default Subscribe