import React from 'react'
import './styles.css'

export const Para = ({text, className}) => {
  return (
    <p className={`para ${className}`}>{text}</p>
  )
}
