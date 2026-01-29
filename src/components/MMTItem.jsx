import React from 'react'
import '../styles/mmt_item.css'
// import MMTImage from '../mmt_item_1.png'

function MMTItem({
 title,
 description,
 img

}) {
  return (
    <div className='mmt__item'>
     <h2>{title}</h2>

     <p>
     {description}
     </p>

     {/* <img src={MMTImage} alt="" /> */}
     <img src={img} alt="" />
    </div>
  )
}

export default MMTItem