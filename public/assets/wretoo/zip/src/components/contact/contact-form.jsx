import React from 'react'
import Form from './form'

const ContactForm = () => {
  return (
    <div>
      <div class="flex flex-col md:flex-row p-8 max-w-7xl mx-auto">
      {/* Left Side - Contact Info */}
      <div class="md:w-1/2 mb-8 md:mb-0 px-4 ">
        <h1 class="text-4xl font-bold mb-4">Contact us</h1>
        <p class="mb-6 text-gray-600">
          We value your feedback, inquiries, and contributions. Reach out to us
          through any of the methods below, and we’ll get back to you as soon as
          possible.
        </p>

        <div class="mb-4">
          <p class="font-semibold text-lg flex items-center">
            <span class="text-red-500 mr-2">📞</span> (123) 456-7890
          </p>
          <p class="text-gray-500 py-3">Monday - Friday : 6am – 6pm</p>
        </div>

        <div class="mb-4">
          <p class="font-semibold text-lg flex items-center">
            <span class="text-red-500 mr-2">📧</span> contact@nexusnews.com
          </p>
          <p class="text-gray-500 py-3">Hear back in about 24 hours.</p>
        </div>

        <div>
          <p class="font-semibold text-lg flex items-center">
            <span class="text-red-500 mr-2">📍</span> Address
          </p>
          <p class="text-gray-500 py-3">
            1234 Elm Street, Springfield, IL 62701, USA
          </p>
        </div>
      </div>

      {/* Right Side - Contact Form */}
       <Form/>
    </div>
    </div>
  )
}

export default ContactForm