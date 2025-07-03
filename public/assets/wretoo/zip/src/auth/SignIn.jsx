import React, { useState } from "react";
import {
  Buttons,
  Header,
  Inputs,
  FormBtn2,
  DownSection,
} from "../components/signup/imports";
import google from "/images/google.png";
import twitter from "/images/twitter.png";
const SignIn = () => {
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
      <div className="rounded-xl sm:w-full md:w-1/2 flex flex-col items-center py-8 bg-[#FCF7F7] space-y-9 md:rounded-l-xl">
        <Header name="Sign In For Treact" />
        <div className="buttons space-y-3">
          <Buttons name="Sign In With Google" image={google} />
          <Buttons name="Sign In With Twitter" image={twitter} />
        </div>
        <p className="text-gray-400 font-semibold text-center">
          Or Sign in with your e-mail
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center space-y-4 text-start"
        >
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

          <FormBtn2 loading={loading} buttonText="Sign In" />
        </form>

        <DownSection
          policy2="Forgot Password ?"
          accounts="Dont have an account"
          name="Sign Up"
        />
      </div>

      <div className="side2 hidden md:flex w-1/2 items-center justify-center rounded-r-xl">
        <img
          src="/images/loginBannr.png"
          alt="banner"
          className="object-contain max-h-full"
        />
      </div>
    </div>
  );
};

export default SignIn;
