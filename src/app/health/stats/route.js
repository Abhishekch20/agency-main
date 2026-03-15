import { NextResponse } from "next/server";
import { formatDuration, getUptimeMs } from "../_utils";

export const dynamic = "force-dynamic";

export async function GET() {
  const uptimeMs = getUptimeMs();
  return NextResponse.json(
    {
      totalCompiles: null,
      averageCompileTime: null,
      lastCompileDuration: null,
      firstCompileTime: null,
      serverUptime: formatDuration(uptimeMs),
    },
    { status: 200 }
  );
}

