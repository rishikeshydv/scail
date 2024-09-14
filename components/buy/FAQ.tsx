import React from 'react'
interface FAQProps {
    logo:any
    header:string
    content:string
}
const FAQ:React.FC<FAQProps> = ({logo,header,content}) => {
  return (
    <div className='flex gap-8 bg-[#F5F5F5] px-10 py-4 rounded-3xl w-[105%]'>
        <div className='py-7'>
            {/* This is for the logo */}
            {logo}
        </div>
        <div className='flex flex-col gap-2'>
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