import ServerCalculator from "@/app/lib/servercalculator";
import { NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const { key } = await req.json();
    new ServerCalculator().press(key)
    return new NextResponse(null, {status: 200})
}

