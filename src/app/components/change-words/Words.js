"use client";
import { Typewriter } from "react-simple-typewriter";

const TypingEffect = () => {
  return (
    <h2 className="text-white text-lg font-bold xs:text-2xl  sm:tracking-wider xl:text-3xl 2xl:text-4xl">
      And I'm a{" "}
      <span className="text-cyan-300 ">
        <Typewriter
          words={["Frontend Developer","UI/UX Designer"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h2>
  );
};

export default TypingEffect;
