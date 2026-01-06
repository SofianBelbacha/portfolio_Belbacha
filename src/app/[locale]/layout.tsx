// app/[locale]/layout.tsx
import { ReactNode } from 'react';
import { getMessages, setRequestLocale } from 'next-intl/server';
import LocaleClientLayout from './localeClientLayout';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export const generateStaticParams = () =>
  routing.locales.map(locale => ({ locale }));

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }


  // Définir la locale pour le rendu statique
  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <LocaleClientLayout locale={locale} messages={messages}>
      {children}
    </LocaleClientLayout>
  );
}
