'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume, FaGithub } from "react-icons/fa6";
import { ImFacebook, ImLinkedin2 } from "react-icons/im";
import { RiTwitterFill } from "react-icons/ri";
import Link from 'next/link';
import Button from '@/app/components/botton/Button';
import Subtitle from '@/app/components/subtitle/Subtitle';
import Title from '@/app/components/title/Title';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    if (!value.trim()) return `${name[0].toUpperCase() + name.slice(1)} is required`;

    if ((name === 'name' || name === 'subject') && !/^[A-Za-z\s]+$/.test(value)) {
      return 'Only letters allowed';
    }

    if (name === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
      return 'Invalid email format';
    }

    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.entries(formData).forEach(([field, value]) => {
      const error = validateField(field, value);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      id='contact'
      className='text-white h-fit text-center py-11 bg-gray'
    >
      <Title title1="Get In" title2="Touch!" />

      <div className='flex justify-evenly flex-wrap w-[95%] text-sm md:text-md 2xl:w-[93rem] m-auto mt-11'>
        <div className='md:w-[40%] h-fit text-start'>
          <Subtitle subtitle="Let's Work Together" />
          <p>Have a project in mind or need a developer to bring your ideas to life? Let’s connect and create something amazing together!</p>
          <div className='mt-11 flex items-center gap-2'>
            <MdEmail className='text-blue text-xl' />
            <p className='text-sm'>382ahmadraza@gmail.com</p>
          </div>
          <div className='mt-4 flex items-center gap-2'>
            <FaPhoneVolume className='text-blue text-lg' />
            <p className='text-sm'>+92 3020408062</p>
          </div>
          <div className='flex gap-4 mt-11 text-blue hover:[&>*]:text-white [&>*]:h-[40px] [&>*]:w-[40px] [&>*]:border [&>*]:border-blue [&>*]:rounded-full hover:[&>*]:bg-blue hover:[&>*]:shadow-effect hover:[&>*]:shadow-blue  [&>*]:cursor-pointer'>
            <Link href={"https://www.facebook.com/in/382ahmadraza"} target='_blank' className='flex items-center justify-center'>
              <ImFacebook />
            </Link>
            <Link href={"https://www.twitter.com/in/382ahmadraza"} target='_blank' className='flex items-center justify-center'>
              <RiTwitterFill />
            </Link>
            <Link href={"https://github.com/382ahmadaraz"} target='_blank' className='flex items-center justify-center'>
              <FaGithub />
            </Link>
            <Link href={"https://www.linkedin.com/in/ahmad-raza161"} target='_blank' className='flex items-center justify-center'>
              <ImLinkedin2 />
            </Link>
          </div>
        </div>

        <form className='w-full mt-7 md:mt-0 md:w-[55%]' onSubmit={handleSubmit}>
          <div className='text-start'>
            <Subtitle subtitle="Send Me a Message" />
          </div>
          <div className='md:flex justify-between'>
            <div className='text-start md:w-[48%]'>
              <label className='block my-2'>Your Name</label>
              <div className='flex items-center pr-2 border rounded-lg border-slate-500 bg-dark'>
                <input
                  name="name"
                  type='text'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Enter Name'
                  className='p-3 w-full outline-none bg-dark rounded-lg'
                />
                <p className='text-blue'>*</p>
              </div>
              {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name}</p>}
            </div>

            <div className='text-start md:w-[48%]'>
              <label className='block my-2'>Your Email</label>
              <div className='flex items-center pr-2 border rounded-lg border-slate-500 bg-dark'>
                <input
                  name="email"
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter Email'
                  className='p-3 w-full outline-none bg-dark rounded-lg'
                />
                <p className='text-blue'>*</p>
              </div>
              {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
            </div>
          </div>

          <div className='text-start mt-3'>
            <label className='block my-2'>Subject</label>
            <input
              name="subject"
              type='text'
              value={formData.subject}
              onChange={handleChange}
              placeholder='Enter Subject'
              className='p-3 w-full border rounded-lg border-slate-500 outline-none bg-dark'
            />
            {errors.subject && <p className='text-red-500 text-xs mt-1'>{errors.subject}</p>}
          </div>

          <div className='text-start mt-3'>
            <label className='block my-2'>Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className='p-2 border rounded-lg border-slate-500 outline-none bg-dark w-full'
              rows={10}
              placeholder='Enter Your Message ...'
            />
          </div>

          <Button
            btn={isSubmitting ? "Processing..." : isSubmitted ? "Sent!" : "Send Message"}
            disabled={isSubmitting}
          />
          {isSubmitted && (
            <p className="text-green-500 mt-3 font-medium">
              Thanks for contacting me! I’ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </motion.div>
  );
}
