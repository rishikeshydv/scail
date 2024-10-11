import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Filter, MapPin, SearchCode } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {Input} from "@nextui-org/input";
import { Label } from '../ui/label'

export default function Filters() {
  return (
    <div className='md:border-r-1  px-4 md:px-10'>
        <div className='flex justify-between border-b-1'>
        <div className='flex items-center gap-2'>
        <Filter size={18} className='text-[#0874DE]'/>
        <h1 className='text-[20px]'>Filters</h1>
        </div>
        <Button className='text-[#0874DE] text-[18px] font-semibold border-none bg-transparent hover:bg-gray-100'>Clear All</Button>
        </div>
        {/* Location */}
        <Accordion type="single" collapsible className="w-full border-b-1">
      <AccordionItem value="item-1" className='border-none'>
        <AccordionTrigger className='flex justify-start space-x-4 text-[20px]'>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 26.1244L21.1871 19.9371C24.6043 16.5201 24.6043 10.9799 21.1871 7.56281C17.7701 4.14573 12.2299 4.14573 8.81281 7.56281C5.39573 10.9799 5.39573 16.5201 8.81281 19.9371L15 26.1244ZM15 29.6599L7.04505 21.705C2.65165 17.3115 2.65165 10.1885 7.04505 5.79505C11.4385 1.40165 18.5615 1.40165 22.955 5.79505C27.3484 10.1885 27.3484 17.3115 22.955 21.705L15 29.6599ZM15 16.25C16.3808 16.25 17.5 15.1308 17.5 13.75C17.5 12.3693 16.3808 11.25 15 11.25C13.6193 11.25 12.5 12.3693 12.5 13.75C12.5 15.1308 13.6193 16.25 15 16.25ZM15 18.75C12.2386 18.75 10 16.5114 10 13.75C10 10.9886 12.2386 8.75 15 8.75C17.7614 8.75 20 10.9886 20 13.75C20 16.5114 17.7614 18.75 15 18.75Z" fill="#0874DE"/>
          </svg>
<p className='text-left'>Location</p></AccordionTrigger>
        <AccordionContent className='flex justify-evenly items-center gap-2 px-4'>
        <Select>
  <SelectTrigger className="w-[120px] text-[#808080] shadow-md`wz nm">
    <SelectValue placeholder="5 Miles" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="5m">5 Miles</SelectItem>
    <SelectItem value="10m">10 Miles</SelectItem>
    <SelectItem value="15m">15 Miles</SelectItem>
  </SelectContent>
</Select>
<span className='text-[16px]'>from</span>
<Input
      variant="bordered"
      placeholder="ZIP Code"
      endContent={
< SearchCode className='text-[#808080]'/>
      }
      className="w-[160px] shadow-none"
    />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    {/* Exterior Color */}
    <Accordion type="single" collapsible className="w-full border-b-1">
      <AccordionItem value="item-1" className='border-none'>
        <AccordionTrigger className='flex justify-start space-x-4 text-[20px]'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="color-filter-line 1">
<path id="Vector" d="M14.9998 3.74988C17.7611 3.74988 19.9998 5.98846 19.9998 8.74988C19.9998 9.43042 19.8644 10.0772 19.6195 10.6666C17.5683 10.8863 15.6295 11.948 14.3503 13.7083C12.7763 13.5042 11.4307 12.5682 10.6675 11.2483C10.243 10.5142 9.99973 9.66236 9.99973 8.74988C9.99973 5.98846 12.2383 3.74988 14.9998 3.74988ZM22.2041 10.8405C22.3966 10.1763 22.4998 9.47458 22.4998 8.74988C22.4998 4.60774 19.1419 1.24988 14.9998 1.24988C10.8576 1.24988 7.49973 4.60774 7.49973 8.74988C7.49973 9.47461 7.60285 10.1763 7.79535 10.8406C7.12395 11.006 6.46476 11.2675 5.8372 11.6298C2.25 13.7009 1.02093 18.2878 3.092 21.875C5.16307 25.4623 9.75 26.6913 13.3371 24.6203C13.9648 24.2579 14.5209 23.8178 14.9998 23.319C15.4788 23.8178 16.0348 24.2578 16.6623 24.6202C20.2495 26.6912 24.8364 25.4622 26.9075 21.8749C28.9785 18.2878 27.7495 13.7008 24.1623 11.6297C23.5348 11.2674 22.8755 11.0059 22.2041 10.8405ZM16.4426 21.1678C17.2781 19.2814 17.3281 17.0714 16.4434 15.0834C17.4071 13.8222 18.8904 13.1249 20.415 13.1239C21.2628 13.1234 22.1221 13.3387 22.9123 13.7948C25.3038 15.1755 26.1231 18.2335 24.7424 20.6249C23.3616 23.0164 20.3038 23.8358 17.9123 22.455C17.323 22.1149 16.8306 21.6744 16.4426 21.1678ZM14.2059 16.2085C14.8163 17.6738 14.6784 19.307 13.9169 20.6279C13.4934 21.3624 12.8774 21.9989 12.0872 22.4552C9.69573 23.8359 6.63778 23.0165 5.25707 20.625C3.87636 18.2335 4.69573 15.1757 7.0872 13.7949C7.67653 13.4547 8.30433 13.2484 8.93713 13.1658C10.1531 14.8324 12.0419 15.9807 14.2059 16.2085Z" fill="#0874DE"/>
</g>
</svg>
<p className='text-left'>Exterior Color</p></AccordionTrigger>
        <AccordionContent className='flex justify-evenly items-center gap-2 px-4'>
        <Select>
  <SelectTrigger className="w-full text-[#808080]">
    <SelectValue placeholder="Choose a Color" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="gray">Gray</SelectItem>
    <SelectItem value="aqua">Aqua</SelectItem>
    <SelectItem value="blonde">Blonde</SelectItem>
  </SelectContent>
</Select>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    {/* Interior Color */}
    <Accordion type="single" collapsible className="w-full border-b-1">
      <AccordionItem value="item-1" className='border-none'>
        <AccordionTrigger className='flex justify-start space-x-4 text-[20px]'>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2.5C21.9028 2.5 27.5 7.47222 27.5 13.6111C27.5 17.4445 24.3889 20.5555 20.5555 20.5555H18.0972C16.9445 20.5555 16.0139 21.4861 16.0139 22.6389C16.0139 23.1666 16.2222 23.6528 16.5416 24.0139C16.875 24.3889 17.0834 24.875 17.0834 25.4166C17.0834 26.5695 16.125 27.5 15 27.5C8.09722 27.5 2.5 21.9028 2.5 15C2.5 8.09722 8.09722 2.5 15 2.5ZM13.5139 22.6389C13.5139 20.1054 15.5638 18.0555 18.0972 18.0555H20.5555C23.0081 18.0555 25 16.0637 25 13.6111C25 8.924 20.5846 5 15 5C9.47794 5 5 9.47794 5 15C5 20.2375 9.02825 24.5356 14.155 24.9648C13.7435 24.271 13.5139 23.4701 13.5139 22.6389ZM9.375 15C8.33946 15 7.5 14.1605 7.5 13.125C7.5 12.0895 8.33946 11.25 9.375 11.25C10.4105 11.25 11.25 12.0895 11.25 13.125C11.25 14.1605 10.4105 15 9.375 15ZM20.625 15C19.5895 15 18.75 14.1605 18.75 13.125C18.75 12.0895 19.5895 11.25 20.625 11.25C21.6605 11.25 22.5 12.0895 22.5 13.125C22.5 14.1605 21.6605 15 20.625 15ZM15 11.25C13.9645 11.25 13.125 10.4105 13.125 9.375C13.125 8.33946 13.9645 7.5 15 7.5C16.0355 7.5 16.875 8.33946 16.875 9.375C16.875 10.4105 16.0355 11.25 15 11.25Z" fill="#0874DE"/>
</svg>
<p className='text-left'>Interior Color</p></AccordionTrigger>
        <AccordionContent className='flex justify-evenly items-center gap-2 px-4'>
        <Select>
  <SelectTrigger className="w-full text-[#808080]">
    <SelectValue placeholder="Choose a Color" />
  </SelectTrigger>
  <SelectContent>
  <SelectItem value="red">Red</SelectItem>
    <SelectItem value="blue">Blue</SelectItem>
    <SelectItem value="white">White</SelectItem>
  </SelectContent>
</Select>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    {/* Price*/}
    <Accordion type="single" collapsible className="w-full border-b-1">
      <AccordionItem value="item-1" className='border-none'>
        <AccordionTrigger className='flex justify-start space-x-4 text-[20px]'>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0059 27.5034C8.10231 27.5034 2.50586 21.907 2.50586 15.0034C2.50586 8.09986 8.10231 2.50342 15.0059 2.50342C21.9094 2.50342 27.5059 8.09986 27.5059 15.0034C27.5059 21.907 21.9094 27.5034 15.0059 27.5034ZM15.0059 25.0034C20.5288 25.0034 25.0059 20.5262 25.0059 15.0034C25.0059 9.48057 20.5288 5.00342 15.0059 5.00342C9.48301 5.00342 5.00586 9.48057 5.00586 15.0034C5.00586 20.5262 9.48301 25.0034 15.0059 25.0034ZM10.6309 17.5034H17.5059C17.851 17.5034 18.1309 17.2236 18.1309 16.8784C18.1309 16.5332 17.851 16.2534 17.5059 16.2534H12.5059C10.78 16.2534 9.38086 14.8544 9.38086 13.1284C9.38086 11.4025 10.78 10.0034 12.5059 10.0034H13.7559V7.50342H16.2559V10.0034H19.3809V12.5034H12.5059C12.1607 12.5034 11.8809 12.7832 11.8809 13.1284C11.8809 13.4736 12.1607 13.7534 12.5059 13.7534H17.5059C19.2318 13.7534 20.6309 15.1525 20.6309 16.8784C20.6309 18.6044 19.2318 20.0034 17.5059 20.0034H16.2559V22.5034H13.7559V20.0034H10.6309V17.5034Z" fill="#0874DE"/>
</svg>
<p className='text-left'>Price</p></AccordionTrigger>
        <AccordionContent className='flex justify-evenly items-center gap-2 px-4'>
          <div className='flex flex-col justify-center gap-1'>
          <Label>Min.</Label>
        <Select>
  <SelectTrigger className="w-[160px] text-[#808080] shadow-md`wz nm">
    <SelectValue placeholder="$0" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="min0">$0</SelectItem>
    <SelectItem value="min1">$100,000</SelectItem>
    <SelectItem value="min2">$250,000</SelectItem>
    <SelectItem value="min3">$400,000</SelectItem>
    <SelectItem value="min4">$600,000</SelectItem>
    <SelectItem value="min5">$1,000,000+</SelectItem>
  </SelectContent>
</Select>
          </div>
          <div className='flex flex-col justify-center gap-1'>
          <Label>Max.</Label>
        <Select>
  <SelectTrigger className="w-[160px] text-[#808080] shadow-md`wz nm">
    <SelectValue placeholder="$1,000,000" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="max1">$100,000</SelectItem>
    <SelectItem value="max2">$250,000</SelectItem>
    <SelectItem value="max3">$400,000</SelectItem>
    <SelectItem value="max4">$600,000</SelectItem>
    <SelectItem value="max5">$1,000,000+</SelectItem>
  </SelectContent>
</Select>
          </div>

        </AccordionContent>
      </AccordionItem>
    </Accordion>
    {/* Beds */}
    <Accordion type="single" collapsible className="w-full border-b-1">
      <AccordionItem value="item-1" className='border-none'>
        <AccordionTrigger className='flex justify-start space-x-4 text-[20px]'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3327 14.6667V26.6667H26.666V22.6667H5.33268V26.6667H2.66602V5.33337H5.33268V18.6667H15.9993V9.33337H23.9993C26.9448 9.33337 29.3327 11.7212 29.3327 14.6667ZM26.666 18.6667V14.6667C26.666 13.1939 25.4721 12 23.9993 12H18.666V18.6667H26.666ZM10.666 14.6667C11.4024 14.6667 11.9993 14.0698 11.9993 13.3334C11.9993 12.597 11.4024 12 10.666 12C9.92964 12 9.33268 12.597 9.33268 13.3334C9.33268 14.0698 9.92964 14.6667 10.666 14.6667ZM10.666 17.3334C8.45688 17.3334 6.66602 15.5426 6.66602 13.3334C6.66602 11.1242 8.45688 9.33337 10.666 9.33337C12.8751 9.33337 14.666 11.1242 14.666 13.3334C14.666 15.5426 12.8751 17.3334 10.666 17.3334Z" fill="#0874DE"/>
</svg>
<p className='text-left'>Beds</p></AccordionTrigger>
<AccordionContent className='flex justify-evenly items-center gap-2 px-4'>
          <div className='flex flex-col justify-center gap-1'>
          <Label>Min.</Label>
        <Select>
  <SelectTrigger className="w-[160px] text-[#808080] shadow-md`wz nm">
    <SelectValue placeholder="0" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="minbed0">0</SelectItem>
    <SelectItem value="minbed1">1</SelectItem>
    <SelectItem value="minbed2">2</SelectItem>
    <SelectItem value="minbed3">3</SelectItem>
    <SelectItem value="minbed4">4</SelectItem>
    <SelectItem value="minbed5+">5+</SelectItem>
  </SelectContent>
</Select>
          </div>
          <div className='flex flex-col justify-center gap-1'>
          <Label>Max.</Label>
        <Select>
  <SelectTrigger className="w-[160px] text-[#808080] shadow-md`wz nm">
    <SelectValue placeholder="5+" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="maxbed1">1</SelectItem>
    <SelectItem value="maxbed2">2</SelectItem>
    <SelectItem value="maxbed3">3</SelectItem>
    <SelectItem value="maxbed4">4</SelectItem>
    <SelectItem value="maxbed5+">5+</SelectItem>
  </SelectContent>
</Select>
          </div>

        </AccordionContent>
      </AccordionItem>
    </Accordion>
        {/* Baths */}
        <Accordion type="single" collapsible className="w-full border-b-1">
      <AccordionItem value="item-1" className='border-none'>
        <AccordionTrigger className='flex justify-start space-x-4 text-[20px]'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3327 14.6667V26.6667H26.666V22.6667H5.33268V26.6667H2.66602V5.33337H5.33268V18.6667H15.9993V9.33337H23.9993C26.9448 9.33337 29.3327 11.7212 29.3327 14.6667ZM26.666 18.6667V14.6667C26.666 13.1939 25.4721 12 23.9993 12H18.666V18.6667H26.666ZM10.666 14.6667C11.4024 14.6667 11.9993 14.0698 11.9993 13.3334C11.9993 12.597 11.4024 12 10.666 12C9.92964 12 9.33268 12.597 9.33268 13.3334C9.33268 14.0698 9.92964 14.6667 10.666 14.6667ZM10.666 17.3334C8.45688 17.3334 6.66602 15.5426 6.66602 13.3334C6.66602 11.1242 8.45688 9.33337 10.666 9.33337C12.8751 9.33337 14.666 11.1242 14.666 13.3334C14.666 15.5426 12.8751 17.3334 10.666 17.3334Z" fill="#0874DE"/>
</svg>
<p className='text-left'>Baths</p></AccordionTrigger>
<AccordionContent className='flex justify-evenly items-center gap-2 px-4'>
          <div className='flex flex-col justify-center gap-1'>
          <Label>Min.</Label>
        <Select>
  <SelectTrigger className="w-[160px] text-[#808080] shadow-md`wz nm">
    <SelectValue placeholder="0" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="minbath0">0</SelectItem>
    <SelectItem value="minbath1">1</SelectItem>
    <SelectItem value="minbath2">2</SelectItem>
    <SelectItem value="minbath3">3</SelectItem>
    <SelectItem value="minbath4">4</SelectItem>
    <SelectItem value="minbath5+">5+</SelectItem>
  </SelectContent>
</Select>
          </div>
          <div className='flex flex-col justify-center gap-1'>
          <Label>Max.</Label>
        <Select>
  <SelectTrigger className="w-[160px] text-[#808080] shadow-md`wz nm">
    <SelectValue placeholder="5+" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="maxbath1">1</SelectItem>
    <SelectItem value="maxbath2">2</SelectItem>
    <SelectItem value="maxbath3">3</SelectItem>
    <SelectItem value="maxbath4">4</SelectItem>
    <SelectItem value="maxbath5+">5+</SelectItem>
  </SelectContent>
</Select>
          </div>

        </AccordionContent>
      </AccordionItem>
    </Accordion>
    {/* Square Feet */}
    <Accordion type="single" collapsible className="w-full border-b-1">
      <AccordionItem value="item-1" className='border-none'>
        <AccordionTrigger className='flex justify-start space-x-4 text-[20px]'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3327 14.6667V26.6667H26.666V22.6667H5.33268V26.6667H2.66602V5.33337H5.33268V18.6667H15.9993V9.33337H23.9993C26.9448 9.33337 29.3327 11.7212 29.3327 14.6667ZM26.666 18.6667V14.6667C26.666 13.1939 25.4721 12 23.9993 12H18.666V18.6667H26.666ZM10.666 14.6667C11.4024 14.6667 11.9993 14.0698 11.9993 13.3334C11.9993 12.597 11.4024 12 10.666 12C9.92964 12 9.33268 12.597 9.33268 13.3334C9.33268 14.0698 9.92964 14.6667 10.666 14.6667ZM10.666 17.3334C8.45688 17.3334 6.66602 15.5426 6.66602 13.3334C6.66602 11.1242 8.45688 9.33337 10.666 9.33337C12.8751 9.33337 14.666 11.1242 14.666 13.3334C14.666 15.5426 12.8751 17.3334 10.666 17.3334Z" fill="#0874DE"/>
</svg>
<p className='text-left'>Square Feet</p></AccordionTrigger>
<AccordionContent className='flex justify-evenly items-center gap-2 px-4'>
          <div className='flex flex-col justify-center gap-1'>
          <Label>Min.</Label>
        <Select>
  <SelectTrigger className="w-[160px] text-[#808080] shadow-md`wz nm">
    <SelectValue placeholder="0" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="minsqft0">0</SelectItem>
    <SelectItem value="minsqft1">500</SelectItem>
    <SelectItem value="minsqft2">1000</SelectItem>
    <SelectItem value="minsqft3">1500</SelectItem>
    <SelectItem value="minsqft4">2000</SelectItem>
    <SelectItem value="minsqft5+">2500+</SelectItem>
  </SelectContent>
</Select>
          </div>
          <div className='flex flex-col justify-center gap-1'>
          <Label>Max.</Label>
        <Select>
  <SelectTrigger className="w-[160px] text-[#808080] shadow-md`wz nm">
    <SelectValue placeholder="3000+" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="maxsqft1">500</SelectItem>
    <SelectItem value="maxsqft2">1000</SelectItem>
    <SelectItem value="maxsqft3">1500</SelectItem>
    <SelectItem value="maxsqft4">2000</SelectItem>
    <SelectItem value="maxsqft5">2500</SelectItem>
    <SelectItem value="maxsqft6+">3000+</SelectItem>
  </SelectContent>
</Select>
          </div>

        </AccordionContent>
      </AccordionItem>
    </Accordion>
    {/* Home Type */}
    <Accordion type="single" collapsible className="w-full border-b-1">
      <AccordionItem value="item-1" className='border-none'>
        <AccordionTrigger className='flex justify-start space-x-4 text-[20px]'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.334 28H6.66732C5.93094 28 5.33398 27.403 5.33398 26.6666V14.6666H1.33398L15.1037 2.14863C15.6123 1.6863 16.3891 1.6863 16.8976 2.14863L30.6673 14.6666H26.6673V26.6666C26.6673 27.403 26.0704 28 25.334 28ZM8.00065 25.3333H24.0007V12.2099L16.0007 4.93716L8.00065 12.2099V25.3333ZM10.6673 20H21.334V22.6666H10.6673V20Z" fill="#0874DE"/>
</svg>
<p className='text-left'>Home Type</p></AccordionTrigger>
<AccordionContent className='flex justify-evenly items-center gap-2 px-4'>
        <Select>
  <SelectTrigger className="w-full text-[#808080]">
    <SelectValue placeholder="Choose a Type" />
  </SelectTrigger>
  <SelectContent>
  <SelectItem value="apartments">Apartments</SelectItem>
    <SelectItem value="single-family">Single Family</SelectItem>
    <SelectItem value="condos">Condos</SelectItem>
    <SelectItem value="commercial">Commercial</SelectItem>
  </SelectContent>
</Select>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    {/* Year Built */}
    <Accordion type="single" collapsible className="w-full border-b-1">
      <AccordionItem value="item-1" className='border-none'>
        <AccordionTrigger className='flex justify-start space-x-4 text-[20px]'>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33268 4.00004V1.33337H11.9993V4.00004H19.9993V1.33337H22.666V4.00004H27.9993C28.7358 4.00004 29.3327 4.597 29.3327 5.33337V12H26.666V6.66671H22.666V9.33337H19.9993V6.66671H11.9993V9.33337H9.33268V6.66671H5.33268V25.3334H13.3327V28H3.99935C3.26298 28 2.66602 27.4031 2.66602 26.6667V5.33337C2.66602 4.597 3.26298 4.00004 3.99935 4.00004H9.33268ZM22.666 16C19.7205 16 17.3327 18.3879 17.3327 21.3334C17.3327 24.2788 19.7205 26.6667 22.666 26.6667C25.6115 26.6667 27.9993 24.2788 27.9993 21.3334C27.9993 18.3879 25.6115 16 22.666 16ZM14.666 21.3334C14.666 16.9151 18.2477 13.3334 22.666 13.3334C27.0843 13.3334 30.666 16.9151 30.666 21.3334C30.666 25.7516 27.0843 29.3334 22.666 29.3334C18.2477 29.3334 14.666 25.7516 14.666 21.3334ZM21.3327 17.3334V21.8856L24.3899 24.9428L26.2755 23.0572L23.9993 20.7811V17.3334H21.3327Z" fill="#0874DE"/>
</svg>
<p className='text-left'>Year Built</p></AccordionTrigger>
<AccordionContent className='flex justify-evenly items-center gap-2 px-4'>
          <div className='flex flex-col justify-center gap-1'>
          <Label>Min.</Label>
        <Select>
  <SelectTrigger className="w-[160px] text-[#808080] shadow-md`wz nm">
    <SelectValue placeholder="Choose a range" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="min1950">Before 1950</SelectItem>
    <SelectItem value="min2000">Before 2000</SelectItem>
    <SelectItem value="min2050">Before 2050</SelectItem>
  </SelectContent>
</Select>
          </div>
          <div className='flex flex-col justify-center gap-1'>
          <Label>Max.</Label>
        <Select>
  <SelectTrigger className="w-[160px] text-[#808080] shadow-md`wz nm">
    <SelectValue placeholder="Choose a range" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="max2000">Before 2000</SelectItem>
    <SelectItem value="max2050">Before 2050</SelectItem>
  </SelectContent>
</Select>
          </div>

        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  )
}
