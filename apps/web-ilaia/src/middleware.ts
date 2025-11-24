import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Development environment handling
  if (hostname.includes('localhost:')) {
    return NextResponse.next();
  }

  // Production subdomain routing
  if (hostname.startsWith('ilaia.')) {
    // Already on ilaia subdomain, continue
    return NextResponse.next();
  }

  // Redirect if not on ilaia subdomain in production
  if (!hostname.startsWith('ilaia.') && !hostname.includes('localhost')) {
    const url = request.nextUrl.clone();
    url.hostname = `ilaia.${hostname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
