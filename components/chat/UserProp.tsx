import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
interface userPropProps {
    msg: string;
}
export default function UserProp({msg}:userPropProps) {
  return (
    <div className="flex items-start justify-end space-x-2">
      <div className="bg-blue-100 p-3 rounded-lg max-w-[70%]">
        <p className="text-gray-600 break-words">{msg}</p>
      </div>
      <Avatar>
        <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
        <AvatarFallback>User</AvatarFallback>
      </Avatar>
    </div>
  )
}
