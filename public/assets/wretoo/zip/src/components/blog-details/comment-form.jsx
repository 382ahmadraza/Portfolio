import { useState } from "react";
import Heading from "../shared/common/heading";

const CommentForm = () => {
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
    saveInfo: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.comment.trim()) newErrors.comment = 'Comment is required';
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true); // ✅ Hides the form
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6   mx-auto  space-y-4"
    >
       <Heading CustomHeading={'Leave a comment'} CustomHeadingStyle={'!text-3xl'} level={3}/>
      <p className="text-gray-600">
        Your email address will not be published. Required fields are marked *
      </p>

      <textarea
        name="comment"
        placeholder="Type here.."
        value={formData.comment}
        onChange={handleChange}
        // cols={13}
        rows={6}
        className="w-full border p-2 resize-none  "
      />
      {errors.comment && (
        <p className="text-red-500 text-sm">{errors.comment}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="url"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      {(errors.name || errors.email) && (
        <div className="text-red-500 text-sm">
          {errors.name && <p>{errors.name}</p>}
          {errors.email && <p>{errors.email}</p>}
        </div>
      )}

          <label className="inline-flex items-start text-sm text-gray-700">
            <input
              type="checkbox"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
              className="mr-2 mt-1"
            />
            Save my name, email, and website in this browser for the next time I comment.
          </label>

      <button
        type="submit"
        className="bg-primary text-white px-6 py-2  cursor-pointer hover:bg-red-700 transition duration-200"
      >
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;
