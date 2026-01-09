// app/[locale]/LocaleClientLayout.tsx ('use client')
'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode, useEffect } from 'react';
import Contact from '../_components/layout/contact';
import Header from '../_components/layout/header';
import { AlternateLinks } from '../_components/seo/AlternateLinks';

export default function LocaleClientLayout({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: string;
  messages: any;
}) {

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Paris">
      <AlternateLinks />
      <Header />
      {children}
      <Contact />
    </NextIntlClientProvider>

  );
}
