import React from 'react'

export default function Title(props) {
  return (
    <div className='my-3'>
        <p className='text-4xl font-semibold'>{props.title1} <span className='text-4xl font-semibold text-blue'>{props.title2}</span></p>
        {/* <p </p> */}
    </div>
  )
}
