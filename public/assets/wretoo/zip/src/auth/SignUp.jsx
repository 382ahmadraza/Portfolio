import React, { useState } from "react";
import {
  Buttons,
  DownSection,
  Header,
  Inputs,
  FormBtn,
} from "../components/signup/imports";
import google from "/images/google.png";
import twitter from "/images/twitter.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    setTimeout(() => {
      alert("Submitted Successfully!");

      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="signupPage flex flex-col bg-zinc-100 mx-4 rounded-xl md:flex-row justify-center items-center h-full shadow-xl">
      {/* Left Side */}
      <div className="side1 rounded-xl sm:w-full md:w-1/2 flex flex-col items-center py-8 bg-[#FCF7F7] space-y-9 md:rounded-l-xl">
        <Header name="Sign Up For Treact" />

        <div className="buttons space-y-3">
          <Buttons name="Sign Up With Google" image={google} />
          <Buttons name="Sign Up With Twitter" image={twitter} />
        </div>

        <p className="text-gray-400 font-semibold text-center">
          Or Sign up with your e-mail
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center space-y-4 text-start">
          <Inputs
            types="text"
            name="username"
            placeHolders="Username"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
          />
          <Inputs
            types="email"
            name="email"
            placeHolders="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Inputs
            types="password"
            name="password"
            placeHolders="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <Inputs
            types="password"
            name="confirmPassword"
            placeHolders="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />

          <FormBtn loading={loading} buttonText="Sign Up" />
        </form>

        <DownSection
          policy="I agree to abide by Treact's Terms of Service and "
          policy2="its Privacy Policy"
          accounts="Already have an account"
          name="Sign In"
        />
      </div>


      <div className="side2 hidden md:flex w-1/2 items-center justify-center rounded-r-xl">
        <img src="/images/signBanner.png" alt="banner" className="object-contain max-h-full" />
      </div>
    </div>
  );
};

export default SignUp;
