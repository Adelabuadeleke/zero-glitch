import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <section className="about__zero_glitch">
     <article>
      <h2>About Zero Glitch</h2>

      <p>
       Zero Glitch is a decentralised application (dApp) 
       that lives on the blockchain. That means that it 
       is controlled by no single entity and is completely 
       open to anyone to use.
      </p>

      <p>
       The application will enable users to create any type 
       of financial asset secured by a blockchain, collateral, 
       and oracle network of their choosing. Any combination of 
       available options can be combined to enable users to 
       securely exchange financial risk without an intermediary
      </p>

      <button className="learn_more">
       Learn more
      </button>
     </article>

     <div className='about_img'>
      <img src="../../User.png" alt="" />
      <img src="../../shape 3.png" alt="" />

     </div>
    </section>
  )
}

export default About