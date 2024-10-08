import { NextRequest, NextResponse } from "next/server";
import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";
const openai = new OpenAI({apiKey:process.env.NEXT_PUBLIC_OPENAI_API_KEY});
//the return type should be NextResponse
export async function POST(request:NextRequest): Promise<NextResponse>{
  try {
    const userMessage = await request.json();
    const res = openai.chat.completions.create({
      messages:[
        {
          role: userMessage.role,
          content: userMessage.message,
        },
      ],
      model:"gpt-4o-mini"
  })
  return NextResponse.json(
    {
      status:200,
      result: (await res).choices[0].message
    });
  }
  catch (error){
    return NextResponse.json(
      { status: 500, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}


// Using Groq


// import Groq from "groq-sdk";
// const groq = new Groq({apiKey: process.env.NEXT_PUBLIC_GROQ_API});
// export async function POST(request:NextRequest){
//   try {
//     const userMessage = await request.json();
//     const res = groq.chat.completions.create({
//       messages:[
//         {
//           role: userMessage.role,
//           content: userMessage.message,
//         },
//       ],
//       model:"llama-3.1-8b-instant"
//   })
//   return NextResponse.json(
//     {
//       status:200,
//       result: (await res).choices[0]?.message?.content || "No Content Returned!"
//     });
//   }
//   catch (error){
//     console.log(error)
//   }
// }