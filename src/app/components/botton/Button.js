import React from 'react'
import { motion } from "framer-motion"

export default function Button(props) {
  return (
      <motion.button 
      initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      className='p-2 px-4 my-7 hover:text-white shadow-blue shadow-effect hover:shadow-md bg-blue text-black rounded-full'>{props.btn}</motion.button>
  )
}
