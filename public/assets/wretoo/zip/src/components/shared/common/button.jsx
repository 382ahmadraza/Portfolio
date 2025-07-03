import React from 'react'

const Button = ({className , btnText}) => {
  return (
    <button className={`px-3 p-2 bg-primary hover:bg-red-400 rounded-sm cursor-pointer w-fit ${className}`}>{btnText}</button>
  )
}

export default Button