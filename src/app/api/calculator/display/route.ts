import ServerCalculator from "@/app/lib/servercalculator";
import { NextResponse } from "next/server";

export const GET = async () =>{
    const display = new ServerCalculator().getDisplay();
    return NextResponse.json({'display' : display}, {status :200})
}