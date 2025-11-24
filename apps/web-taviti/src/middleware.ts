import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Development environment handling
  if (hostname.includes('localhost:')) {
    return NextResponse.next();
  }

  // Production subdomain routing
  if (hostname.startsWith('taviti.')) {
    // Already on taviti subdomain, continue
    return NextResponse.next();
  }

  // Redirect if not on taviti subdomain in production
  if (!hostname.startsWith('taviti.') && !hostname.includes('localhost')) {
    const url = request.nextUrl.clone();
    url.hostname = `taviti.${hostname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
