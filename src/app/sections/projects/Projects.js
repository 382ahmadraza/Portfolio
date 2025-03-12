import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdOpen } from "react-icons/io";
import Title from '@/app/components/title/Title'
import luxeurs from "../../assets/lux.PNG"
import social from "../../assets/social.PNG"
import dine from "../../assets/dine.PNG"
import notes from "../../assets/notes.PNG"
import rmc1 from "../../assets/race.PNG"

export default function Projects() {
    const projects = [
        { id: 1, img: luxeurs, subtitle: "Ecommerce web", detail: "Luxeurs is a stylish e-commerce platform for men's and women's fashion, offering a sleek, user-friendly shopping experience.", icon: <IoMdOpen className='w-[36px] h-[36px] rounded-full p-2 bg-white m-auto text-black ' />, link: "https://www.loom.com/share/903f4dbf1fbb4da8adf78873cbeecb21" },
        { id: 2, img: social, subtitle: "Social Media Web", detail: "Social media website is a dynamic platform for seamless user interaction, content sharing, and community engagement. ", icon: <IoMdOpen className='w-[36px] h-[36px] rounded-full p-2 bg-white m-auto text-black ' />, link: "https://www.loom.com/share/2adf63f448f54ccabd61d0837972c4b0" },
        { id: 3, img: dine, subtitle: "Ecommerce web", detail: " Dine Market is an online shopping site offering a wide range of products with a seamless and user-friendly experience. ", icon: <IoMdOpen className='w-[36px] h-[36px] rounded-full p-2 bg-white m-auto text-black ' />, link: "https://www.loom.com/share/cb4656a87dc54ec4839300c21104d0e8" },
        { id: 4, img: notes, subtitle: "Notes Taking App", detail: " Online notes-taking app is a fast and intuitive platform for creating, organizing, and managing notes efficiently. ", icon: <IoMdOpen className='w-[36px] h-[36px] rounded-full p-2 bg-white m-auto text-black ' />, link: "https://www.loom.com/share/c38a512e988846698e9bf645bed68c01" },
        { id: 5, img: rmc1, subtitle: "AL Ain Raceway", detail: "Al Ain Raceway is a premier karting circuit in the UAE, known for its world-class track and thrilling racing experiences.  ", icon: <IoMdOpen className='w-[36px] h-[36px] rounded-full p-2 bg-white m-auto text-black ' />, link: "https://www.loom.com/share/22696088719f48899ce8026bd685b098" },
    ]

    return (
        <div id='portfolio' className='text-white h-fit text-center py-16 bg-dark '>
            <Title title1="Latest" title2="Projects" />
            <div className='flex justify-start flex-wrap w-[95%] m-auto pl-7 mt-11 '>
                {projects.map((item, id) => {
                    return (
                        <div key={id} className='group m-4 bg-gray w-[30%] h-[50%] p-4 rounded-lg shadow-effect'>

                            {/* <Link href={item.link} target='blank'> */}
                            <div className='absolute w-[344px] h-[157px] p-1 bg-gradient-to-t from-blue/100 to-cyan group-hover:duration-[.7s]  rounded-lg hidden group-hover:block '>
                                <p className=' text-white text-3xl font-bold text-blak'>{item.subtitle}</p>
                                <p className='text-sm font-medium my-1'>{item.detail}</p>
                                <Link href={item.link} target='blank'>{item.icon}</Link>
                            </div>
                            {/* </Link> */}
                            <div className=' flex flex-wrap items-center border-red-400 shadow-effect rounded-lg  '>
                                <Image src={item.img} alt={"project-logo"} className='h-full w-full  rounded-lg '></Image>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
