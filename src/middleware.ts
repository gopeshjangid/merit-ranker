import { NextRequest, NextResponse } from "next/server";

import { fetchAuthSession } from "aws-amplify/auth/server";

import { runWithAmplifyServerContext } from "@/lib/amplify-utils";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec, {});
        return session.tokens !== undefined;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });

  if (authenticated) {
    return response;
  }

  // Store the original URL (pathname + search params) for redirect after login
  const loginUrl = new URL("/login", request.url);
  const redirectPath = request.nextUrl.pathname + request.nextUrl.search;
  
  // Only set redirect if it's not already the login page (prevent redirect loops)
  if (request.nextUrl.pathname !== "/login") {
    loginUrl.searchParams.set("redirect", redirectPath);
  }
  
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
     /*
     * Protected routes - require authentication:
     * - /teacher/* (all teacher routes including dashboard, branding, etc.)
     * Exclude from matching:
     * - / (landing page)
     * - /about, /contact, /faq, /how-it-works, /partners (public pages)
     * - /teachers and /teachers/* (public teacher listings)
     * - /buy-esim, /compatibility (public features)
     * - /privacy-policy, /terms-of-service (legal pages)
     * - /login (auth page)
     * - /api/* (API routes)
     * - /_next/* (Next.js internal)
     * - /favicon.ico, /sitemap.xml, /robots.txt (static files)
     */
    "/teacher/:path*",
  ],
};