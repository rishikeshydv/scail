/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ERffZSlmeVE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface NewsProps {
  image:string
  title:string
  content:string
  readTime:string
  date:string
  writer:string
  writerImage:string
}
export default function News({image,title,content,readTime,date,writer,writerImage}:NewsProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-center w-full max-w-7xl">
        <button className="p-2 mr-10 bg-white rounded-full hidden md:flex">
          <ArrowLeftIcon className="w-6 h-6 text-[#0874de]" />
        </button>
        <div className="flex flex-col md:flex-row overflow-hidden ml-6 mr-14 md:mx-4 ">
          <img
            src={image}
            alt="Property"
            className="w-full md:w-1/2 object-cover rounded-3xl"
            width="600"
            height="400"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="p-6 md:w-1/2">
            <div className="flex items-center mb-4">
              <Avatar>
                <AvatarImage src={writerImage} alt="Cameron Williamson" />
                <AvatarFallback>CW</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium">{writer}</p>
              </div>
            </div>
            <h2 className="text-[40px] font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-4 text-[18px]">
              {content}
            </p>
            <div className="flex items-center text-gray-500 mb-4">
              <ClockIcon className="w-4 h-4 mr-2 text-[#0874de]" />
              <span className="text-md font-semibold text-black">{readTime}</span>
              <span className="mx-2">/</span>
              <span className="text-md font-semibold text-black">{date}</span>
            </div>
            <Button className="mt-auto rounded-[50px] bg-[#0874de]">
              READ MORE <ArrowRightIcon className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
        <button className="p-2 bg-white rounded-full hidden md:flex">
          <ArrowRightIcon className="w-6 h-6 text-[#0874de]" />
        </button>
      </div>
    </div>
  )
}

function ArrowLeftIcon(props:React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props:React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function ClockIcon(props:React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}