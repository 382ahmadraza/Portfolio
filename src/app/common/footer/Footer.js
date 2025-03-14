"use client"
import React from 'react'
import Link from 'next/link'
import { BiSolidArrowToTop } from "react-icons/bi";



export default function Footer() {
  return (
    <div className='h-fit p-8 sm:h-fit flex flex-wrap justify-center gap-3 items-center text-center sm:justify-between px-11 bg-dark text-white'>
        <div>
            <p>Copyright &copy; 2024 by <Link href="/"  className='text-blue hover:shadow-effect' > Ahmad Raza  </Link>| All Rights Reserved</p>
        </div>
        <Link href={'/'} className='p-1 bg-blue rounded-lg'>
            <BiSolidArrowToTop className='h-[26px] w-[26px] md:h-[40px] md:w-[40px] '/>
        </Link>
        

    </div>
  )
}
