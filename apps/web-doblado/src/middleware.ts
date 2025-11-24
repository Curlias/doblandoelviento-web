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

  if (hostname.startsWith('ilaia.')) {
    // Already on ilaia subdomain, continue
    return NextResponse.next();
  }

  // Main domain (doblandoelviento.com) - already on correct app
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
