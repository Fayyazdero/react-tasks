import React, { useState } from 'react'
import './styles.css'

export const Heading = ({ className, title, boldHeading}) => {
  return (

        <h2 className={`processes-heading ${className}`}>{title}<span className='bold-heading'>{boldHeading}</span></h2>
  )
}
