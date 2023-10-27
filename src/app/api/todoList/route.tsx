import { NextRequest } from "next/server";

export async function GET() {
    return new Response(JSON.stringify({data:'Task api called'}))
}