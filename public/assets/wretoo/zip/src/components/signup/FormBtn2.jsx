import React from 'react'

const FormBtn2 = ({ loading, buttonText }) => {
  return (
    <>
    <button className="flex justify-center items-center text-md bg-sky-700 text-white w-[270px] md:w-[340px] py-4 text-[20px] mx-10 rounded-md border border-gray-500 hover:bg-sky-800">
          <span className="pr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
          </span>
          {loading ? "Submitting..." : buttonText}
        </button>
    </>
  )
}

export default FormBtn2
