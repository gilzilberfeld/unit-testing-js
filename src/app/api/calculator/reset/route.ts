import ServerCalculator from "@/app/lib/servercalculator";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    new ServerCalculator().reset()
    return new NextResponse(null, {status: 200})
}

