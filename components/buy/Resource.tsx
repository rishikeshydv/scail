
import { MoveRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface ResourceProps {
    image:string
    header:string
    content:string
}
const Resource:React.FC<ResourceProps> =  ({image,header,content}) => {
  return (
    <div className='bg-white w-full rounded-2xl overflow-hidden'>
        <Image src={image} alt='Hero home image' className='w-full h-[250px] object-cover' width={300} height={100}/>
        <div className='p-6'>
        <p className='mb-2 text-xl font-bold'>{header}</p>
        <p className='mb-2 text-md tracking-wide'>{content}</p>
        <Link href={"/help"}><Button className='bg-[#0874DE]'>Read More <ChevronRight/></Button></Link>
        
        </div>

    </div>
  )
}

export default Resource
