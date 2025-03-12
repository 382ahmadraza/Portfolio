import Button from '@/app/components/botton/Button'
import Title from '@/app/components/title/Title'
import React from 'react'

export default function Contact() {
    return (
        <div id='services' className=' text-white h-fit text-center py-16 bg-gray  '>
            <Title title1="Contact" title2="Me!" />

            <div className='w-[55%] m-auto   mt-11'>
                <form >

                    <div className='flex justify-between  '>
                        <div className='text-start   w-[48%]'>
                            <label className='block my-2'>Your Name</label>
                            <div className='flex items-center pr-2 border rounded-lg border-slate-500 bg-dark'>
                                <input type='text' placeholder='Enter Name' className='p-3 w-full  outline-none bg-dark rounded-lg' />
                                <p className='text-blue'>*</p>
                            </div>
                        </div>
                        <div className='text-start   w-[48%]'>
                            <label className='block my-2'>Your Email</label>
                            <div className='flex items-center pr-2 border rounded-lg border-slate-500 bg-dark '>
                                <input type='email' placeholder='Enter Name' className='p-3 w-full  outline-none bg-dark rounded-lg' />
                                <p className='text-blue'>*</p>
                            </div>
                        </div>
                    </div>

                    <div className='text-start   '>
                        <label className='block my-2'>Subject</label>
                        <input type='email' placeholder='Enter Name' className='p-3 w-full border rounded-lg border-slate-500 outline-none bg-dark' />
                    </div>
                    <div className='text-start   '>
                        <label className='block my-2'>Your Email</label>
                        <textarea className='p-2 border rounded-lg border-slate-500 outline-none bg-dark' cols={10} rows={10} placeholder='Enter Your Message ...'>
                        </textarea>
                    </div>
                    <Button btn="Send Message"/>

                </form>
            </div>
        </div>
    )
}
