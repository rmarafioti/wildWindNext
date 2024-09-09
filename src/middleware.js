import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.clone()
  
  // Remove trailing slash if present
  const path = url.pathname.endsWith('/') ? url.pathname.slice(0, -1) : url.pathname

  console.log('Middleware running for path:', path) // Debugging log

  // 1-to-1 redirects
  const redirects = {
    '/_4070771': '/',
    '/1-8': '/',
    '/8042425': '/',
    '/9212524': '/',
    '/9272536': '/',
    '/chris': '/',
    '/image_50407425': '/',
    '/image_50441729': '/',
    '/image_50457089': '/',
    '/image_50605569': '/',
    '/image_50802177-3': '/',
    '/image_50802177-5': '/',
    '/image_50802177-6': '/',
    '/image1': '/',
    '/image12': '/',
    '/image6': '/',
    '/image8': '/',
    '/img_3514': '/',
    '/img-2237': '/',
    '/img-2515': '/',
    '/img-8937': '/',
    '/photo-jun-20-10-27-21-pm': '/',
    '/product-category/uncategorized': '/',
    '/unnamed-23': '/',
    '/contact-us': '/contact',
    '/gift-card': '/giftcards',
    '/merch': '/giftcards',
    '/merch/wild-wind-tattoo-gift-card': '/giftcards',
    '/installations': '/media',
    '/artist/rich-marafioti': '/richtats',
    '/reviews': '/aboutus'
  }

  if (path in redirects) {
    console.log('301 Redirect to:', redirects[path]) // Debugging log
    return NextResponse.redirect(new URL(redirects[path], request.url), 301)
  }

  // Special case for /artist/rich-marafioti/* paths
  if (path.startsWith('/artist/rich-marafioti/')) {
    console.log('301 Redirect artist page to /richtats') // Debugging log
    return NextResponse.redirect(new URL('/richtats', request.url), 301)
  }

  // If no redirect is needed, continue to the next middleware or to the page
  return NextResponse.next()
}

// Optionally, you can specify which routes this middleware applies to
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}