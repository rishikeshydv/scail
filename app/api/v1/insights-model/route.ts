import { NextRequest, NextResponse } from "next/server";
import dotenv from "dotenv";
dotenv.config();
import Groq from "groq-sdk";
const groq = new Groq({apiKey: process.env.NEXT_PUBLIC_GROQ_API});
export async function POST(request:NextRequest){
  try {
    const userMessage = await request.json();
    const res = groq.chat.completions.create({
      messages:[
        {
          role: userMessage.role,
          content: userMessage.message,
        },
      ],
      model:"llama3-8b-8192"
  })
  return NextResponse.json(
    {
      status:200,
      result: (await res).choices[0]?.message?.content || "No Content Returned!"
    });
  }
  catch (error){
    console.log(error)
  }
}