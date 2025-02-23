import {  NextResponse } from 'next/server'

let defaultLocale = 'en'
let locales = ['en', 'fr']

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
  return request.headers.get('accept-language')?.startsWith('fr') ? 'fr' : defaultLocale;

}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/favicon.ico') || pathname.startsWith('/_next/')) {
    return NextResponse.next();
  }

  // Pour rediriger la racine vers une locale par défaut (e.g., `/fr`)
  if (pathname === '/') {
    const locale = getLocale(request); // Langue par défaut ou basée sur l'accept-language
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }


  // Vérifier si le chemin contient déjà une langue supportée (en ou fr)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  
  // Si l'URL contient déjà une locale, ne rien faire
  if (pathnameHasLocale) return;

  // Si l'URL ne contient pas de locale, rediriger vers la langue par défaut
  const locale = getLocale(request); // Récupère la langue à partir de la requête (ex. basé sur l'en-tête Accept-Language)
  
  // Redirige vers la locale par défaut ou celle déterminée
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    '/((?!_next|api).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
