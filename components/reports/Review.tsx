import Image from 'next/image'
import React from 'react'
import styles from "@/styles/Image.module.css";
import { Star } from 'lucide-react';
interface ReviewProps {
    img:string
    content:string
    name:string
    profession:string
}
export default function Review({img,content,name,profession}: ReviewProps) {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 items-center justify-center'>
        <Image
            src={img}
            width={150}
            height={150}
            alt="Rishi's profile picture"
            className={`${styles.circular}`} // Add a new class
          />
          <div className='flex gap-2'>
          <Star color='#0874DE' fill='#0874DE'/>
          <Star color='#0874DE' fill='#0874DE'/>
          <Star color='#0874DE' fill='#0874DE'/>
          <Star color='#0874DE' fill='#0874DE'/>
          <Star color='#0874DE' fill='#0874DE'/>
          </div>
        </div>
          <p className='text-center text-gray-500'>{content}</p>
        <div className='flex flex-col'>
            <p className='font-bold text-center text-[#0874DE] text-xl'>{name}</p>
            <p className='text-center text-md'>{profession}</p>
        </div>


    </div>
  )
}
