import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className='p-2 px-4 my-7 hover:text-white shadow-blue shadow-[0px_0px_15px_rgba(0,255,255,0.8)] bg-blue text-black rounded-full'>{props.btn}</button>
    </div>
  )
}
