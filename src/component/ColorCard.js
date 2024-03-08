import React from 'react'
import './ColorCard.css'

export const ColorCard = (props) => {


  return (
    <div className='cardsDiv'>
    <div className='color-card'>
      <div style={{
        width:'100px',
        height:'80%',
        backgroundColor:props.colorcode
      }}>
        </div>
        <span>{props.colorcode}</span>
        <span style={{
            color:props.colorcode
        }}>{props.colorName}</span>
    </div>
    </div>
  )
}
