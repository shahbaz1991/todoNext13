import { NextResponse } from "next/server"

export async function GET(req: NextResponse) {

    return new Response('Hi api called')
}