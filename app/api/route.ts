import {NextResponse} from 'next/server'
import OpenAI from 'openai';

export const runtime = 'edge';
const openai = new OpenAI({
  apiKey: process.env.API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

export async function POST(req: Request) {
  const body = await req.json()
  console.log("stream",body.data)


  try {
    const openai = new OpenAI({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    });

    const stream = await openai.chat.completions.create({
      messages: body.data,
      model: 'gpt-3.5-turbo',
      stream: true,
    }).asResponse();
    return new Response(stream,{
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/event-stream; charset=utf-8",
        Connection: "keep-alive",
      },
    })



  } catch (e) {
    console.log(e)
    return NextResponse.json(e, {
      status: 500
    })
  }

}