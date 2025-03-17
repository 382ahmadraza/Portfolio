import Button from '@/app/components/botton/Button'
import Subtitle from '@/app/components/subtitle/Subtitle'
import Title from '@/app/components/title/Title'
import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { RiTwitterFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import Link from 'next/link';
import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }} 
        id='contact' className=' text-white h-fit text-center py-11 bg-gray  '>
            <Title title1="Get In" title2="Touch!" />

            <div className='flex justify-evenly flex-wrap w-[95%] text-sm md:text-md 2xl:w-[93rem] m-auto  mt-11   '>
                <div className='  md:w-[40%] h-fit text-start'>
                    <Subtitle subtitle="Let's Work Together"/>
                    <p>Have a project in mind or need a developer to bring your ideas to life? Let’s connect and create something amazing together! Feel free to reach out via email or message me directly.</p>
                    <div className='mt-11 flex items-center gap-2'>
                        <MdEmail className='text-blue text-xl'/>
                        <p className='text-sm'>382ahmadraza@gmail.com</p>
                    </div>
                    <div className='mt-4 flex items-center gap-2'>
                        <FaPhoneVolume className='text-blue text-lg'/>
                        <p className='text-sm'>+92 3020408062</p>
                    </div>
                        {/* <div className='hidden md:block'> */}
                        <div className=' flex gap-4 mt-11 text-blue hover:[&>*]:text-white [&>*]:h-[40px] [&>*]:w-[40px] [&>*]:border [&>*]:border-blue [&>*]:rounded-full hover:[&>*]:bg-blue hover:[&>*]:shadow-effect hover:[&>*]:shadow-blue  [&>*]:cursor-pointer'>
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
                </div>
                        {/* </div> */}
                </div>
                <form  className='w-full mt-7 md:mt-0  md:w-[55%]'>
                    <div className=' text-start'>
                        <Subtitle subtitle="Send Me a Message" />
                    </div>
                    <div className='md:flex justify-between  '>
                        <div className='text-start   md:w-[48%]'>
                            <label className='block my-2'>Your Name</label>
                            <div className='flex items-center pr-2 border rounded-lg border-slate-500 bg-dark'>
                                <input type='text' placeholder='Enter Name' className='p-3 w-full  outline-none bg-dark rounded-lg' />
                                <p className='text-blue'>*</p>
                            </div>
                        </div>
                        <div className='text-start   md:w-[48%]'>
                            <label className='block my-2'>Your Email</label>
                            <div className='flex items-center pr-2 border rounded-lg border-slate-500 bg-dark '>
                                <input type='email' placeholder='Enter email' className='p-3 w-full  outline-none bg-dark rounded-lg' />
                                <p className='text-blue'>*</p>
                            </div>
                        </div>
                    </div>

                    <div className='text-start   '>
                        <label className='block my-2'>Subject</label>
                        <input type='text' placeholder='Enter Subject' className='p-3 w-full border rounded-lg border-slate-500 outline-none bg-dark' />
                    </div>
                    <div className='text-start   '>
                        <label className='block my-2'>Your Message</label>
                        <textarea type='text' className='p-2 border rounded-lg border-slate-500 outline-none bg-dark w-full'   rows={10} placeholder='Enter Your Message ...'>
                        </textarea>
                    </div>
                    <Button btn="Send Message"/>

                </form>
            </div>
        </motion.div>
    )
}
