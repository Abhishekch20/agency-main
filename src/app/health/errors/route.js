import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(
    { errorCount: 0, warningCount: 0, errors: [], warnings: [], state: "success" },
    { status: 200 }
  );
}

