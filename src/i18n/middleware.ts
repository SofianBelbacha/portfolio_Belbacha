// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './routing';

const intlMiddleware = createMiddleware({
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: 'always',
  localeDetection: false
});

export const config = {
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)'
};