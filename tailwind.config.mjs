
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        xs : "480px" ,
      },
      colors: {
        blue:"#00efff",
        gray :"#323946",
        dark:"#1f242d",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
