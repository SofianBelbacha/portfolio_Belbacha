// app/[locale]/LocaleClientLayout.tsx ('use client')
'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import Contact from '../_components/layout/contact';
import Header from '../_components/layout/header';
export default function LocaleClientLayout({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Paris">
      <Header />
      {children}
      <Contact />
    </NextIntlClientProvider>

  );
}
