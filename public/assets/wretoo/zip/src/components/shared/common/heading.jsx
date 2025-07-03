import React from 'react'

const Heading = ({CustomHeading , CustomHeadingStyle , level=1}) => {
  const Tag = `h${level}`
  return (
    <Tag className={`w-full font-bold text-2xl md:text-3xl lg:text-4xl ${CustomHeadingStyle}`}>
        {CustomHeading}
    </Tag>
  )
}

export default Heading