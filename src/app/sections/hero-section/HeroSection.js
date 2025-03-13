import React from 'react'
import Words from "../../components/change-words/Words"
import Image from 'next/image'
import { ImFacebook } from "react-icons/im";
import { RiTwitterFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import Link from 'next/link';
import Button from '../../components/botton/Button';
import ahmad from "../../assets/ahmad.png"


export default function HeroSection() {
    return (
        <div id="home" className='bg-dark'>
            <div className='flex flex-wrap md:flex-row md:flex-nowrap md:px-2 justify-evenly items-center text-white h-fit pb-11 sm:py-11  2xl:w-[96rem]  2xl:m-auto'>
            <div className='w-[90%] m-auto mt-4 md:m-0 md:w-[54%] lg:w-[40%] h-fit'>
                <div className='my-2'>
                    <h3 className='text-xl sm:text-3xl font-bold xl:text-4xl 2xl:text-4xl'>Hello, It's Me</h3>
                    <h1 className='text-3xl sm:text-5xl my-2 font-bold xl:text-6xl 2xl:text-7xl'> Ahmad Raza</h1>
                    <Words />
                </div>
                <p className='my-3 sm:my-5  lg:my-8 text-slate-200 2xl:text-xl'>
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
            <div className='w-[90%] xs:w-[60%] md:w-[40%] lg:w-[40%] h-[85%]  '>
                <Image src={ahmad} alt='ahmad' ></Image>
            </div>
            </div>
        </div>
    )
}
