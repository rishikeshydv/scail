import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
interface botPropProps {
    msg: string;
}
export default function BotProp({msg}:botPropProps) {
  return (
    <div className="flex items-start space-x-2">
      <Avatar>
        <AvatarImage src="/images/chat-bot-avatar.png" alt="Bot Avatar" />
        <AvatarFallback>Bot</AvatarFallback>
      </Avatar>
      <div className="bg-gray-100 p-3 rounded-lg max-w-[70%]">
        <p className="text-gray-600 break-words">{msg}</p>
      </div>
    </div>
  )
}
