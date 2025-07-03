// import React, { useState } from 'react';

// const Form = ({ className = '' }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = 'Full Name is required';
//     }

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     if (formData.phone && !/^\d{10,15}$/.test(formData.phone)) {
//       newErrors.phone = 'Phone must be 10 to 15 digits';
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required';
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       alert('Form submitted successfully!');
//       // Submit logic here (e.g., API call)
//     }
//   };

//   return (
//     <div className={`md:ml-5 md:w-1/2 ${className}`}>
//       <form className="space-y-4" onSubmit={handleSubmit} noValidate>
//         <div>
//           <label className="block mb-1">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded p-2"
//             required
//           />
//           {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
//         </div>

//         <div>
//           <label className="block mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded p-2"
//             required
//           />
//           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//         </div>

//         <div>
//           <label className="block mb-1">Phone</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded p-2"
//           />
//           {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//         </div>

//         <div>
//           <label className="block mb-1">Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded p-2"
//             rows="4"
//             required
//           ></textarea>
//           {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//         </div>

//         <button
//           type="submit"
//           className="bg-black text-white px-6 py-2 font-semibold hover:bg-red-800 hover:cursor-pointer"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;



import React, { useState } from 'react';

const Form = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false); // ✅ Track if form submitted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSuccess(false); // Reset success message on change
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (formData.phone && !/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 to 15 digits';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true); // ✅ Show success message
      setFormData({ fullName: '', email: '', phone: '', message: '' }); // ✅ Reset form (optional)

      // Submit logic here if needed
    }
  };

  return (
    <div className={`md:ml-5 md:w-1/2 ${className}`}>
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            rows="4"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 font-semibold hover:bg-red-800 hover:cursor-pointer"
        >
          Submit
        </button>
      </form>

      {/* ✅ Success message */}
      {success && (
        <p className="mt-4 text-green-600 font-medium">
          Form submitted successfully!
        </p>
      )}
    </div>
  );
};

export default Form;
