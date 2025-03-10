import React from 'react'
import Words from "../change-words/Words"
import Image from 'next/image'
// import 'boxicons'
import { ImFacebook } from "react-icons/im";
import { RiTwitterFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import Link from 'next/link';
import Button from '../botton/Button';
import ahmad from "../../assets/ahmad.jpg"


export default function HeroSection() {
    return (
        <div className=' flex justify-evenly text-white h-[100vh] bg-dark'>
            <div className='w-[40%] h-[85%]  boder-2  '>
                <div className='my-2'>
                    <h3 className='text-2xl font-bold'>Hello, It's Me</h3>
                    <h1 className='text-6xl my-2 font-bold'> Ahmad Raza</h1>
                    <Words />
                </div>
                <p className='my-8 text-slate-400'>I specialize in crafting beautiful, responsive, and user-friendly web experiences. Passionate about clean code, modern UI/UX, and building interactive web applications.</p>

                <div className='flex gap-4 hover:[&>*]:transition-transform duration-1000   text-blue hover:[&>*]:text-white [&>*]:h-[40px] [&>*]:w-[40px] [&>*]:border [&>*]:border-blue [&>*]:rounded-full hover:[&>*]:bg-blue hover:[&>*]:shadow-[0px_0px_15px_rgba(0,255,255,0.8)] hover:[&>*]:shadow-blue  [&>*]:cursor-pointer'>
                    <Link href={"https://facebook.com"} target='blank' className=' flex items-center justify-center '>
                        <ImFacebook />
                    </Link>
                    <Link href={"https://twitter.com"} target='blank' className=' flex items-center justify-center'>
                        <RiTwitterFill />
                    </Link>
                    <Link href={"https://instagram.com"} target='blank' className=' flex items-center justify-center '>

                        <AiFillInstagram />
                    </Link>
                    <Link href={"https://linkedin.com"} target='blank' className=' flex items-center justify-center '>
                        <ImLinkedin2 />
                    </Link>
                </div>
                    <Button btn="Download CV"/>
            </div>
            <div className='w-[40%] h-[85%] bg-ble border-2  '>
                <Image src={ahmad} alt='ahmad'></Image>
            </div>
        </div>
    )
}
