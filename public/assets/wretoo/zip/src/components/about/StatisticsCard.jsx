import React from 'react'
const StatisticsData = [
  {
    num: "500,000",
    heading: "Monthly Unique Visitors",
  },
  {
    num: "100,000+",
    heading: "Newsletter Subcribers",
  },
  {
    num: "10,000+",
    heading: "Published Articles",
  },
  {
    num: "150+",
    heading: "Countries Trust Us",
  },
  
];
const StatisticsCard = () => {
  return (
    <>
<div className='w-[90%] mb-20 mt-8 m-auto px-6 lg:px-0 lg:py-14  bg-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:max-w-7xl'>
      {StatisticsData.map((statics, index) => {
        return (
          <div key={index} className='flex flex-col  py-6 md:p-8 lg:px-12 space-y-2 border-b  md:odd:border-r lg:border-0 lg:border-r last:border-none text-white'>
              <span className='text-4xl font-bold '>{statics.num}</span>
              <span>{statics.heading}</span>
          </div>
        )
      })}

</div>


    {/* <div className='flex flex-col bg-[#CF412B] mx-6 my-14 px-4 py-3 md:flex md:flex-row md:py-9 md:mb-28 md:mx-20'>
      {StatisticsData.map((statics, index) => (
        <div
          key={index}
          className="card-item flex flex-col items-start space-y-2 md:space-y-0 md:flex md:flex-row md:items-center   px-2 py-1 w-full md:w-[25rem] text-white md:px-6 md:gap-16"
        >
            <div className="space-y-3">
            <h1 className='text-[24px] font-bold md:text-4xl md:font-semibold'>{statics.num}</h1>
            <p className='text-[15px] md:text-md'>{statics.heading}</p>
            </div>
            <div className="hidden md:block md:w-0.5 md:h-16 md:bg-white md:my-4"></div>
            <span className='w-full h-0.5 bg-white my-4 md:hidden'></span>
        </div>
        ))}
    </div> */}
    </>
  )
}

export default StatisticsCard
