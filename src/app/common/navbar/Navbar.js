"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
  const path = usePathname()

const navlink = [
  { name : "Home" , href:"/"},
  { name : "About" , href:"/about"},
  { name : "Skills" , href:"/skills"},
  { name : "Services" , href:"#services"},
  { name : "Portfolio" , href:"#portfolio"},
  { name : "Contact" , href:"#contact"},
]


  return (
    <div className='bg-dark flex justify-between items-center px-16 py-5'>
        <div className='text-white cursor-pointer' >
            <p className='text-2xl border border-blue p-1 px-3 tracking-widest'>AR<span className='text-blue'>.</span></p>
        </div>
        <div>
        <ul className='text-white flex gap-7'>
             {navlink.map((link , index)=>{
              return(
                <li key={index} ><Link href={link.href} className={path === link.href ? "text-blue p-2" : "text-white p-2 "}>{link.name} </Link></li>
              )
             })}
          </ul>
        </div>
    </div>
  )
}
