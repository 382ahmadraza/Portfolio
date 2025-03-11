import React from 'react'
import Words from "../../components/change-words/Words"
import Image from 'next/image'
// import 'boxicons'
import { ImFacebook } from "react-icons/im";
import { RiTwitterFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import Link from 'next/link';
import Button from '../../components/botton/Button';
import ahmad from "../../assets/ahmad.png"


export default function HeroSection() {
    return (
        <div id='home' className=' flex justify-evenly items-center text-white h-fit py-11 bg-dark'>
            <div className='w-[40%] h-fit  boder-2  '>
                <div className='my-2'>
                    <h3 className='text-2xl font-bold'>Hello, It's Me</h3>
                    <h1 className='text-6xl my-2 font-bold'> Ahmad Raza</h1>
                    <Words />
                </div>
                <p className='my-8 text-slate-200'>
                    I specialize in crafting beautiful, responsive, and user-friendly web experiences. Passionate about clean code, modern UI/UX, and building interactive web applications.
                </p>

                <div className='flex gap-4 text-blue hover:[&>*]:text-white [&>*]:h-[40px] [&>*]:w-[40px] [&>*]:border [&>*]:border-blue [&>*]:rounded-full hover:[&>*]:bg-blue hover:[&>*]:shadow-effect hover:[&>*]:shadow-blue  [&>*]:cursor-pointer'>
                    <Link href={"https://www.facebook.com/in/382ahmadraza"} target='blank' className=' flex items-center justify-center '>
                        <ImFacebook />
                    </Link>
                    <Link href={"https://www.twitter.com/in/382ahmadraza"} target='blank' className=' flex items-center justify-center'>
                        <RiTwitterFill />
                    </Link>
                    <Link href={"https://www.instagram.com/in/ahmadraza161"} target='blank' className=' flex items-center justify-center '>

                        <AiFillInstagram />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/ahmad-raza161"} target='blank' className=' flex items-center justify-center '>
                        <ImLinkedin2 />
                    </Link>
                </div>
                <Button btn="Download CV" />
            </div>
            <div className='w-[40%] h-[85%] '>
                <Image src={ahmad} alt='ahmad' ></Image>
            </div>
        </div>
    )
}
