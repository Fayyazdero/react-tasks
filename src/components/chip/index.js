import React from 'react'
import './styles.css'

export const Chip = ({color, background, text}) => {
  return (
    <div className='chip' style={{background: `${background}`}}><p className='chip-para' style={{color: `${color}`}}>{text}</p></div>
  )
}
