"use client"
import { CheckCircle, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
interface SuccessProps {
    message: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
export default function Success({ message, isOpen,setIsOpen }: SuccessProps) {

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className=" md:w-[400px] bg-white rounded-lg p-6 shadow-lg animate-in zoom-in-95 duration-300">
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="w-16 h-16 text-[#0874de] mb-4" />
          <h2 className="text-2xl font-semibold text-[#0874de] mb-2">Success!</h2>
          <p className="text-gray-600 mb-6">{message}</p>
          <Button 
            onClick={() => setIsOpen(false)}
            className="bg-[#0874de] text-white font-bold py-2 px-4 rounded"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}