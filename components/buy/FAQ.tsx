import React from 'react'
interface FAQProps {
    logo:any
    header:string
    content:string
}
const FAQ:React.FC<FAQProps> = ({logo,header,content}) => {
  return (
    <div className='flex gap-8 bg-gray-100 px-5 py-3 rounded-2xl'>
        <div className='py-16'>
            {/* This is for the logo */}
            {logo}
        </div>
        <div className='flex flex-col gap-4'>
            {/* This is for the text */}
            <p className='text-xl font-semibold'>
                {/* This is for the header */}
                {header}
            </p>
            <p className='text-gray-400'>
                {/* This is for the content */}
                {content}
            </p>
        </div>
    </div>
  )
}

export default FAQ