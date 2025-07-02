import React from 'react'

export default function Title({className , title1 , title2}) {
  return (
    <div className={`my-3 ${className}`}>
        <p className='text-4xl font-semibold'>{title1} <span className='text-4xl font-semibold text-blue'>{title2}</span></p>
        {/* <p </p> */}
    </div>
  )
}
