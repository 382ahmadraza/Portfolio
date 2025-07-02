
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
        mmd : "870px" ,
        xmd: "930px" ,
      },
      colors: {
        blue:"#00efff",
        gray :"#323946",
        dark:"#1f242d",
        grad : "bg-gradient-to-b from-white to-blue/40",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow:{
        effect : "0px 0px 15px rgba(0,255,255,0.8)"
        // inner: "inset 0px -30px 30px -50px blue"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
