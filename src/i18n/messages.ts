// i18n/messages.ts
import { notFound } from "next/navigation";

export async function loadMessages(locale: string) {
  try {
    const home = (await import(`../messages/${locale}/home.json`)).default;
    const common = (await import(`../messages/${locale}/common.json`)).default;
    const profile = (await import(`../messages/${locale}/profile.json`)).default;
    const portfolio = (await import(`../messages/${locale}/portfolio.json`)).default;
    const skills = (await import(`../messages/${locale}/skills.json`)).default;


    return {
      home,
      common,
      profile,
      skills,
      portfolio
    };
  } catch {
    notFound();
  }
}
