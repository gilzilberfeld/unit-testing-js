import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { theNumber } = await req.json();
  const result = calculate(theNumber);
  return NextResponse.json({'result' : result}, { status: 200 });
};

function calculate(theNumber: number): number {
  if (theNumber <= 1) return 1;
  else return calculate(theNumber - 1) * theNumber;
}
