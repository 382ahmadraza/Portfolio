import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className='p-2 px-4 my-7 hover:text-white shadow-blue shadow-effect bg-blue text-black rounded-full'>{props.btn}</button>
    </div>
  )
}
