import React from 'react'
import '../styles/contract.css'

function Contract() {
  return (
    // <div>Contract</div>
    <section>
      <section className='contract__section'>
      <div className="contract__section_content">
       <div>
        <img src="../shake-hands.svg" alt="" />
        <p>
         Parties can enter into any type of financial contract without 
         needing a broker or clearing house to match trades, 
         preserve the secrecy of their positions or settle outcomes.
        </p>
       </div>
      
      </div>

      <div className="contract__section_img">

      </div>
     </section>

     <section className='contract__section'>
       <div className="contract__section_img">

      </div>

      <div className="contract__section_content">
       <div>
        <img src="../contract/subway_coin.svg" alt="" />
        <p>
         Decentralised finance will enable everyone to become providers 
         of financial services much like the internet enabled everyone to 
         become content producers.
        </p>
       </div>
      
      </div>
     </section>

     <section className='contract__section'>
      <div className="contract__section_content">
       <div>
        <img src="../contract/material-symbols-light_mindfulness-rounded.svg" alt="" />
        <p>
         Completely new forms of derivatives contract will emerge 
         that will enable humanity make better predictions about 
         the future.
        </p>
       </div>
      
      </div>

      <div className="contract__section_img">

      </div>
     </section>
    </section>
  )
}

export default Contract