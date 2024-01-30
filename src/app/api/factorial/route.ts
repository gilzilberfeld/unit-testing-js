import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const reqData = await req.json();
  const theResult = calculate(reqData.theNumber);
  return NextResponse.json({ result: theResult }, { status: 200 });
};

function calculate(theNumber: number): number {
  if (theNumber <= 1) return 1;
  else return calculate(theNumber - 1) * theNumber;
}
