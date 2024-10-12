"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Loader2 } from "lucide-react"

export default function Component() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail('')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Under Development</h1>
          <p className="text-gray-600 mb-4">Our product is currently in the works. We&apos;re working hard to bring you something amazing!</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium text-gray-900">
            <span>Progress</span>
            <span>60%</span>
          </div>
          <Progress value={60} className="w-full" />
        </div>

        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center">
            <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h2>
          <p className="text-gray-600 mb-4">Sign up for our newsletter to receive updates on our progress and launch date.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button type="submit" className="w-full" disabled={isSubmitting || isSubmitted}>
              {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted!' : 'Keep Me Updated'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}