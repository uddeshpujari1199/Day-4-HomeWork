import React from 'react'
import { ColorCard } from '../component/ColorCard'
import './ColorPickerScreen.css'

function ColorPickerScreen() {

  const arr=[{
    'colorcode':'#000000',
    'colorName': 'Black'
  },{
    'colorcode':'#949398FF',
    'colorName': 'Gay'
  },{
    'colorcode':'#F4DF4EFF',
    'colorName': 'Illuminating'
  },{
    'colorcode':'#FC766AFF',
    'colorName': ' Coral'
  },{
    'colorcode':'#5B84B1FF',
    'colorName': 'Pacific Coast'
  },{
    'colorcode':'#5F4B8BFF',
    'colorName': 'Violet'
  },{
    'colorcode':'#E69A8DFF',
    'colorName': 'Blooming'
  },{
    'colorcode':'#42EADDFF',
    'colorName': 'Turquoise'
  },{
    'colorcode':'#00203FFF',
    'colorName': 'Sailor Blue'
  },{
    'colorcode':'#ADEFD1FF',
    'colorName': 'Mint'
  },{
    'colorcode':'#ED2B33FF',
    'colorName': 'Tomato'
  },{
    'colorcode':'#D85A7FFF',
    'colorName': 'Rose'
  }]
  return (
    <>
    {
      arr.map((val,index)=>{
        return (
          <div className='colorCard'>
        <ColorCard colorcode={val.colorcode} colorName={val.colorName}></ColorCard>
        </div>
        )
      })
    }
      
    </>
  )
}

export default ColorPickerScreen