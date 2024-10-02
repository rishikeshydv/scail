/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Rv9uQXz5ZOn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function NewProp() {
  return (
      <Card className="w-[400px] bg-[#f5f5f5] shadow-none border-none">
        <CardHeader className="flex justify-between items-center overflow-hidden">
        <img
          src="/images/new-prop-img.jpeg"
          alt="Luxury villa in Texas"
          className="w-full h-[280px] object-cover rounded-t-xl"
          style={{ aspectRatio: "350/200", objectFit: "cover" }}
        /></CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold">Luxury villa in Texas</h2>
          <p className="text-muted-foreground">
            Houses recommended by our partners that have been curated to become.....
          </p>
          <Link href="#" className="text-blue-500 font-semibold text-[18px]" prefetch={false}>
            House Details
          </Link>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <Badge variant="default" className="flex items-center gap-1 bg-white text-black md:px-4 py-2 rounded-lg">
              <BedIcon className="w-4 h-4 text-[#0874DE] hidden md:flex" />
              Bedrooms
            </Badge>
            <Badge variant="default" className="flex items-center gap-1 bg-white text-black md:px-4 py-2 rounded-lg">
              <CarIcon className="w-4 h-4 text-[#0874DE] hidden md:flex" />
              1 Carport
            </Badge>
            <Badge variant="default" className="flex items-center gap-1 bg-white text-black md:px-2 py-2 rounded-lg">
              <HomeIcon className="w-4 h-4 text-[#0874DE] hidden md:flex" />
              Living Area
            </Badge>
            <Badge variant="default" className="flex items-center gap-1 bg-white text-black md:px-4 py-2 rounded-lg">
              <BathIcon className="w-4 h-4 text-[#0874DE] hidden md:flex" />
              Bathrooms
            </Badge>
            <Badge variant="default" className="flex items-center gap-1 bg-white text-black md:px-4 py-2 rounded-lg">
              <BuildingIcon className="w-4 h-4 text-[#0874DE] hidden md:flex" />
              2 Floors
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-4 md:gap-0 items-center">
          <span className="text-[25px] font-bold">$8,50,000</span>
          <Button variant="default" className="ml-auto bg-[#0874DE] rounded-[50px]">
            VIEW DETAILS
          </Button>
        </CardFooter>
      </Card>
  )
}

function BathIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" />
      <line x1="17" x2="17" y1="19" y2="21" />
    </svg>
  )
}


function BedIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  )
}


function BuildingIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function CarIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}


function HomeIcon(props:React.SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}