import ServerCalculator from "@/app/lib/servercalculator";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    new ServerCalculator().reset()
    return new NextResponse(null, {status: 200})
}

