import { NextResponse } from "next/server";
import { formatDuration, getServerInfo, getUptimeMs } from "./_utils";

export const dynamic = "force-dynamic";

export async function GET() {
  const uptimeMs = getUptimeMs();

  return NextResponse.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: {
      seconds: Math.floor(uptimeMs / 1000),
      formatted: formatDuration(uptimeMs),
    },
    server: getServerInfo(),
    environment: process.env.NODE_ENV || "development",
  });
}

