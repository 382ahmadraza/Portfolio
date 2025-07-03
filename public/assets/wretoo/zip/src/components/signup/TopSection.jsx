import React from 'react'
import logo from "/images/logo.svg";
const TopSection = ({name}) => {
  return (
    <>
      <img className="object-contain w-12 h-12" src={logo} alt="logo" />
      <h1 className="font-extrabold text-xl md:text-3xl">{name}</h1>
    </>
  )
}

export default TopSection
