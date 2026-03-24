// app/_components/seo/JsonLd.tsx
export function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sofian Belbacha',
    url: 'https://sofianbelbacha.vercel.app',
    jobTitle: 'Développeur Full Stack',
    description: 'Développeur full stack passionné, spécialisé en Angular, Next.js et ASP.NET Core. En parallèle, je me forme aux pratiques DevOps : Docker, CI/CD et déploiement cloud. Découvrez mes projets et mon parcours.',
    image: 'https://sofianbelbacha.vercel.app/personal/profile.jpg',
    sameAs: [
      'https://github.com/SofianBelbacha',
      'https://www.linkedin.com/in/sofian-belbacha/',
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Angular',
      'Next.js',
      'ASP.NET Core',
      'Docker',
      'DevOps',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}