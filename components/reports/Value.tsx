import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface ValueProps {
    img: StaticImageData;
    title: string;
}
function Value({img, title}: ValueProps) {
  return (
    <div className='bg-transparent overflow-hidden w-full rounded-xl'>
        <Image src={img} alt={title} className='object-cover w-full rounded-xl' />
        <p className='tracking-wide text-center text-lg font-medium pt-6'>{title}</p>
    </div>
  )
}

export default Value