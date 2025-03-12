"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";


export default function Navbar() {
  const path = usePathname()
  const [toggle , setToggle] = useState()

const navlink = [
  { name : "Home" , href:"/"},
  { name : "About" , href:"/#about"},
  { name : "Skills" , href:"/#skills"},
  { name : "Services" , href:"#services"},
  { name : "Portfolio" , href:"#portfolio"},
  { name : "Contact" , href:"#contact"},
]


  return (
    <div  className='w-full sticky top-0 opacity-95 z-20 bg-dark flex justify-between items-center py-5 px-8 xl:px-16   m-auto'>
        <div className='text-white cursor-pointer shadow-effect' >
           <Link href={"/"}> <p className='text-2xl border border-blue p-1 px-3 tracking-widest'>&lt;<span className='text-blue font-bold '>A</span>/<span className='text-blue font-bold'>R</span>&gt;</p></Link>
        </div>

        <div className='md:hidden' onClick={()=>{setToggle(!toggle)}}>
            <IoMenu className='text-white h-[26px] w-[26px]' />
        </div>
        {toggle && (
          <ul className='flex justify-around items-start absolute top-0 right-0 opacity-1 p-3 bg-blue text-black h-fit w-[100%]'>
            <div className='text-white'>
             {navlink.map((link , index)=>{
              return(
                <li key={index} onClick={()=>{setToggle(false)}} className='my-3   px-11 hover:text-black'><Link href={link.href} >{link.name} </Link> <hr className='text-white'/></li>
              
              )
             })}
          </div>
            <button onClick={()=>{setToggle(false)}} className='border border-red-500 p-2 px-4 text-red-500'>close</button>
          </ul>
        )}

        <div className='hidden md:block'>
        <ul className='text-white flex lg:gap-4 xl:gap-7'>
             {navlink.map((link , index)=>{
              return(
                <li key={index} ><Link href={link.href} className={ path === link.href ? "text-blue p-2" : "text-white p-2 hover:text-blue"}>{link.name} </Link></li>
              )
             })}
          </ul>
        </div>
    </div>
  )
}
