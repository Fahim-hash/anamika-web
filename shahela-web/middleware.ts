import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // IP Address বের করা
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'Unknown IP';
  
  // Vercel Console/Log এ প্রিন্ট করা
  console.log(`--- New Visitor ---`);
  console.log(`IP: ${ip}`);
  console.log(`Path: ${request.nextUrl.pathname}`);
  console.log(`Device: ${request.headers.get('user-agent')}`);
  
  return NextResponse.next();
}
