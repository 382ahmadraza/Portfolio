import Title from '@/app/components/title/Title'
import React from 'react'

export default function Projects() {
const projects = [
    { id:1 , img:"aDasdsd"},
    { id:2 , img:"aDasdsd"},
    { id:3 , img:"aDasdsd"},
]

  return (
    <div id='skills' className='text-white h-[100vh] text-center py-16 bg-dark '>
        <Title title1="Latest" title2="Projects"/>
        <div className='flex justify-evenly'>
            {projects.map((item , id)=>{
                return(
                    <div key={id} className='bg-gray border h-[80%] w-[30%]'>
                        {item.img}
                    </div>
                )
            })}
        </div>
    </div>
  )
}
