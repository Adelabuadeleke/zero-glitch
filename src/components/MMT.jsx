import React from 'react'
import '../styles/MMT.css'
import MMTItem from './MMTItem'

function MMT() {
  const MMTData = [
    {
      title:"Manage",
      description:`Harness the power of a new 
            open financial system and 
            put your tokens to work in 
            creative ways to further 
            grow your wealth.`,
      img:"../mmt_item_1.png"
    },

    {
      title:"Mint",
      description:`Create synthetic assets that 
       can track the value of anything that can 
       be measured without needing to know how 
       to code`,
      img:"../mmt_item_2.png"
    },

    {
      title:"Trade",
      description:`Exchange financial risk in the form of 
       digital tokens without needing an online brokerage.`,
      img:"../mmt_item_3.png"
    },

  ]
  return (
    <section className='mmt'>
      {MMTData.map(mmt=>(
        <MMTItem 
          title={mmt.title}
          description={mmt.description}
          img={mmt.img}
        />
      ))}
     {/* <MMTItem
      title={'Manage'}
      description={` Harness the power of a new 
            open financial system and 
            put your tokens to work in 
            creative ways to further 
            grow your wealth.`}
      img={'../mmt_item_1.png'}
     /> */}

      {/* <MMTItem
      title={'Mint'}
      description={`Create synthetic assets that 
       can track the value of anything that can 
       be measured without needing to know how 
       to code`}
      img={'../mmt_item_2.png'}
      className={"mmt_mint"}
     /> */}

     {/* <MMTItem
      title={'Trade'}
      description={`Exchange financial risk in the form of 
       digital tokens without needing an online brokerage.
      `}
      img={'../mmt_item_3.png'}
      className={"mmt_trade"}

     /> */}
     
    </section>
  )
}

export default MMT