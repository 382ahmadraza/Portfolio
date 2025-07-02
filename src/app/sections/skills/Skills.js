import React from 'react'
import Image from 'next/image'
import Title from '@/app/components/title/Title'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import Link from 'next/link';
import { SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion'

export default function Skills() {
    const logo = [
        { id: 1, name: "HTML5", image: <FaHtml5 /> },
        { id: 2, name: "CSS3", image: <FaCss3Alt /> },
        { id: 3, name: "Bootstrap", image: <FaBootstrap /> },
        { id: 4, name: "Tailwind", image: <RiTailwindCssFill /> },
        { id: 5, name: "Javascript", image: <FaJsSquare /> },
        { id: 6, name: "Typescript", image: <SiTypescript /> },
        { id: 7, name: "React.js", image: <FaReact /> },
        { id: 8, name: "Next.js", image: <RiNextjsLine /> },
        { id: 9, name: "Firebase", image: <SiFirebase /> },
        { id: 10, name: "MongoDB", image: <BiLogoMongodb /> },

    ]

    return (
        <div id='skills' className='text-white h-fit text-center py-16 bg-dark '>
            <Title title1="My" title2="Skills" />
            <div className='w-[95%] gap-3 lg:w-[90%] xl:w-[85%] m-auto flex flex-wrap items-center md:gap-7 xmd:pl-8 lg:pl-0 lg:justify-center lg:gap-8 justify-between md:justify-start p-3 mt-11 2xl:w-[90rem] 2xl:m-auto'>
                {logo.map((pic, id) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            key={id} className='w-[47%] xs:w-[30%] md:w-[22%] xmd:w-[22%] xmd:ml-0 lg:w-[17%] flex flex-col items-center justify-center [&>*]:w-[80%] [&>*]:h-[80%] border border-blue xl:px-9 p-2 text-blue hover:text-white rounded-md cursor-pointer hover:bg-blue hover:shadow-effect'>
                            {pic.image}
                            {pic.name}
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
