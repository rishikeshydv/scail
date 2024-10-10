
import { MoveRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface ResourceProps {
    image:string
    header:string
    content:string
    variant?: "primary" | "secondary"
}
const Resource:React.FC<ResourceProps> =  ({image,header,content, variant = 'primary'}) => {
  return (
    <div className={`${variant === "primary" ? 'bg-white' : 'bg-[#F5F5F5]'} w-full rounded-[40px] overflow-hidden`}>
        <Image src={image} alt='Hero home image' className='w-full h-[250px] object-cover' width={300} height={100}/>
        <div className='p-6'>
        <p className='mb-2 text-xl font-bold'>{header}</p>
        <p className='mb-2 text-md tracking-wide'>{content}</p>
        <Link href={"/project/on-progress"}><Button className='bg-[#0874DE] rounded-[50px] my-5' >Read More <ChevronRight/></Button></Link>
        
        </div>

    </div>
  )
}

export default Resource
