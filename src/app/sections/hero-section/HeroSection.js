import React from 'react'
import Words from "../../components/change-words/Words"
import Image from 'next/image'
import { ImFacebook } from "react-icons/im";
import { RiTwitterFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import Link from 'next/link';
import Button from '../../components/botton/Button';
import ahmad from "../../assets/ahmad.png"
import { motion } from "framer-motion"


export default function HeroSection() {
    return (
        <div id="home" className='bg-dark'>
            <div  className='flex flex-wrap md:flex-row md:flex-nowrap md:px-2 justify-evenly items-center text-white h-fit pb-11 sm:py-11  2xl:w-[96rem]  2xl:m-auto'>
            <div className='w-[90%] m-auto mt-4 md:m-0 md:w-[54%] lg:w-[40%] h-fit'>
                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='my-2'>
                    <h3 className='text-xl sm:text-3xl font-bold xl:text-4xl 2xl:text-4xl'>Hello, It's Me</h3>
                    <h1 className='text-3xl sm:text-5xl my-2 font-bold xl:text-6xl 2xl:text-7xl'> Ahmad Raza</h1>
                    <Words />
                </motion.div>
                <motion.p 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }} 
                
                className='my-3 sm:my-5  lg:my-8 text-slate-200 2xl:text-xl'>
                    I specialize in crafting beautiful, responsive, and user-friendly web experiences. Passionate about clean code, modern UI/UX, and building interactive web applications.
                </motion.p>

                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}className='flex gap-4 text-blue hover:[&>*]:text-white [&>*]:h-[40px] [&>*]:w-[40px] [&>*]:border [&>*]:border-blue [&>*]:rounded-full hover:[&>*]:bg-blue hover:[&>*]:shadow-effect hover:[&>*]:shadow-blue  [&>*]:cursor-pointer'>
                    <Link href={"https://www.facebook.com/in/382ahmadraza"} target='blank' className=' flex items-center justify-center '>
                        <ImFacebook />
                    </Link>
                    <Link href={"https://www.twitter.com/in/382ahmadraza"} target='blank' className=' flex items-center justify-center'>
                        <RiTwitterFill />
                    </Link>
                    <Link href={"https://github.com/382ahmadaraz"} target='blank' className=' flex items-center justify-center '>

                        <FaGithub />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/ahmad-raza161"} target='blank' className=' flex items-center justify-center '>
                        <ImLinkedin2 />
                    </Link>
                </motion.div>
                <Button btn="Download CV" />
            </div>
            <motion.div 
            animate={{ y: [0, -20, 0] , opacity:1 }}  
            transition={{
              duration: 2,  
              repeat: Infinity, 
              ease: "easeInOut",  
            }}
            className='w-[90%] xs:w-[60%] md:w-[40%] lg:w-[40%] h-[85%]  '>
                <Image src={ahmad} alt='ahmad' ></Image>
            </motion.div>
        </div>
        </div>
    )
}
