"use client"
import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import BotProp from './BotProp';
import UserProp from './UserProp';

interface chatUIProps {
    className: string;
    setChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Message {
    sender: "user" | "bot";
    content: string;
  }
export default function ChatUI({className,setChatOpen}:chatUIProps) {
    const [msgList, setMsgList] = React.useState<Message[]>([]);
    const [userMsg, setUserMsg] = React.useState<string>("");

    const initialBotMessage:Message = React.useMemo(
        () => ({
          sender: "bot",
          content: "Hello! I am PropAI Bot, how can I help you today?",
        }),
        []
      );
    
        // Initialize the chat with the first bot message
    React.useEffect(() => {
        setMsgList([initialBotMessage]);
    }, [initialBotMessage]);

//function to get response from the model
  const getResponse = async (msg: string) => {
    const response = await fetch("/api/v1/insights-model", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: "user",
        message: msg,
      }),
    });
    const data = await response.json();
    setMsgList((prevMsgList) => [
      ...prevMsgList,
      { sender: "bot", content: data.result.content },
    ]);
  };

  //function on enter
  const handleSendMessage = () => {
    if (!userMsg.trim()) return; // Prevent empty messages

    setMsgList((prevMsgList) => [
      ...prevMsgList,
      { sender: "user", content: userMsg.trim() },
    ]);
    getResponse(userMsg); // Assuming getResponse will handle bot response
    setUserMsg("");
  };

  return (
    <div className={`max-w-md md:max-w-2xl md:w-[450px] mx-auto bg-white rounded-lg shadow-lg ${className}`}>
    <div className="flex items-center p-4 bg-blue-600 rounded-t-lg relative">
      <Avatar>
        <AvatarImage src="/images/chat-bot-avatar.png" alt="Avatar" />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
      <div className="ml-4 text-white">
        <h2 className="text-xl font-bold">
          PropAI Bot{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h2>
        <p className="text-sm">The most reliable Real Estate LLM</p>
      </div>
      <svg onClick={()=>setChatOpen(false)} className='text-white lucide lucide-x absolute right-4 hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>

    </div>
    <div className="p-4 md:h-[250px] overflow-y-scroll flex flex-col gap-2">
  {msgList.map(({ sender, content }, index) => (
    <div key={`${index}`}>
      {sender === "bot" ? (
        <BotProp msg={content} />
      ) : (
        <UserProp msg={content} />
      )}
    </div>
  ))}
</div>

    <div className="flex items-center p-4 border-t">
      <Input type="text" value={userMsg} placeholder="Type here..." className="flex-1" onChange={(e)=>setUserMsg(e.target.value)} onKeyDown={(e)=>{
        if(e.key === 'Enter'){
          handleSendMessage();
        }
      }}/>
      <div className='flex gap-2 ml-2'>
        {/* GIF */}
      <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3333 2.66675L27.9996 9.33342L28 27.9901C28 28.7319 27.4068 29.3334 26.6755 29.3334H5.32453C4.59301 29.3334 4 28.7263 4 28.011V3.98915C4 3.25881 4.59665 2.66675 5.33133 2.66675H21.3333ZM20 5.33341H6.66667V26.6667H25.3333V10.6667H20V5.33341ZM17.3333 13.3334V20.0001H16V13.3334H17.3333ZM14.6667 13.3334V14.6667H12C11.2636 14.6667 10.6667 15.2637 10.6667 16.0001V17.3334C10.6667 18.0698 11.2636 18.6667 12 18.6667H13.3333V17.3334H12V16.0001H14.6667V18.6667C14.6667 19.4031 14.0697 20.0001 13.3333 20.0001H12C10.5272 20.0001 9.33333 18.8062 9.33333 17.3334V16.0001C9.33333 14.5273 10.5272 13.3334 12 13.3334H14.6667ZM22.6667 13.3334V14.6667H20V16.0001H22.6667V17.3334H20V20.0001H18.6667V13.3334H22.6667Z" fill="#969696"/>
</svg>
{/* Attachments */}
<svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6615 18.0001V10.6667C18.6615 7.72123 16.2736 5.33341 13.3281 5.33341C10.3826 5.33341 7.99479 7.72123 7.99479 10.6667V18.0001C7.99479 22.7866 11.875 26.6667 16.6615 26.6667C21.448 26.6667 25.3281 22.7866 25.3281 18.0001V5.33341H27.9948V18.0001C27.9948 24.2593 22.9207 29.3334 16.6615 29.3334C10.4022 29.3334 5.32812 24.2593 5.32812 18.0001V10.6667C5.32812 6.24847 8.90985 2.66675 13.3281 2.66675C17.7464 2.66675 21.3281 6.24847 21.3281 10.6667V18.0001C21.3281 20.5774 19.2388 22.6667 16.6615 22.6667C14.0841 22.6667 11.9948 20.5774 11.9948 18.0001V10.6667H14.6615V18.0001C14.6615 19.1046 15.5569 20.0001 16.6615 20.0001C17.766 20.0001 18.6615 19.1046 18.6615 18.0001Z" fill="#969696"/>
</svg>
{/* Emojis */}
<svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0317 26.4846C14.1325 24.8821 14.5163 23.3563 15.1336 21.9569C13.0869 21.767 11.2301 20.9157 9.78266 19.6202L11.5611 17.6331C12.7414 18.6897 14.2969 19.3305 16.0052 19.3305C16.2403 19.3305 16.472 19.3183 16.7 19.2947C18.9745 16.2893 22.4933 14.2778 26.4897 14.0266C25.5641 9.07844 21.222 5.33341 16.0052 5.33341C10.1142 5.33341 5.33854 10.109 5.33854 16.0001C5.33854 21.2169 9.08357 25.559 14.0317 26.4846ZM25.3696 16.8481C21.0573 17.6529 17.658 21.0522 16.8532 25.3645L25.3696 16.8481ZM29.3385 16.0001C29.3385 16.2237 29.3331 16.4459 29.3221 16.6667L16.6719 29.317C16.4511 29.3279 16.2288 29.3334 16.0052 29.3334C8.64141 29.3334 2.67188 23.3638 2.67188 16.0001C2.67188 8.63628 8.64141 2.66675 16.0052 2.66675C23.3689 2.66675 29.3385 8.63628 29.3385 16.0001ZM13.3385 13.3334C13.3385 14.4379 12.4431 15.3334 11.3385 15.3334C10.234 15.3334 9.33854 14.4379 9.33854 13.3334C9.33854 12.2288 10.234 11.3334 11.3385 11.3334C12.4431 11.3334 13.3385 12.2288 13.3385 13.3334ZM22.6719 13.3334C22.6719 14.4379 21.7764 15.3334 20.6719 15.3334C19.5673 15.3334 18.6719 14.4379 18.6719 13.3334C18.6719 12.2288 19.5673 11.3334 20.6719 11.3334C21.7764 11.3334 22.6719 12.2288 22.6719 13.3334Z" fill="#969696"/>
</svg>
{/* Send */}
<svg onClick={handleSendMessage} className='hover:cursor-pointer' width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.9686 3.94259L21.6975 29.3909C21.4963 30.0955 21.0635 30.1275 20.7414 29.4835L14.6663 17.3333L2.56354 12.4923C1.88397 12.2204 1.89238 11.8136 2.60894 11.5748L28.0573 3.09202C28.7618 2.85714 29.1659 3.25155 28.9686 3.94259ZM25.3801 6.7953L9.08262 12.2278L16.5981 15.234L20.6523 23.3424L25.3801 6.7953Z" fill="#0874DE"/>
</svg>
      </div>
    </div>
  </div>
  )
}
