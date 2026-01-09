// app/_components/seo/JsonLd.tsx
export function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sofian Belbacha',
    url: 'https://sofianbelbacha.vercel.app',
    jobTitle: 'Développeur Full Stack',
    description: 'Développeur web full stack passionné, spécialisé en React, Next.js, ASP.NET Core et pratiques DevOps',
    image: 'https://sofianbelbacha.vercel.app/personal/profile.jpg',
    sameAs: [
      'https://github.com/votre-github',
      'https://linkedin.com/in/votre-linkedin',
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
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