import React from 'react'
interface PointsProps {
    icon:any
    title:string
    content:string
}
export default function Points({icon,title,content}: PointsProps) {
  return (
    <div className='flex flex-col gap-4 justify-center bg-[#F5F5F5] px-8 py-16 rounded-2xl'>
      <div className='flex items-center justify-center'>
        {icon}
      </div>
      <div className='flex flex-col gap-4'>
      <p className='text-xl font-semibold text-center'>{title}</p>
      <p className='text-center text-gray-500 tracking-wide'>{content}</p>
      </div>
    </div>
  )
}
