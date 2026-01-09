// app/_components/seo/AlternateLinks.tsx
'use client';

import { usePathname } from 'next/navigation';

export function AlternateLinks() {
  const pathname = usePathname();
  const baseUrl = 'https://sofianbelbacha.vercel.app';
  
  // Extraire le chemin sans la locale
  const pathWithoutLocale = pathname.replace(/^\/(fr|en)/, '') || '/';
  
  return (
    <>
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr${pathWithoutLocale}`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en${pathWithoutLocale}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/fr${pathWithoutLocale}`} />
    </>
  );
}