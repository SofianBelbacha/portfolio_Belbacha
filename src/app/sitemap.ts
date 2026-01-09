import { MetadataRoute } from 'next';
import { adminDb } from '@/firebase/firebase-admin.config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sofianbelbacha.vercel.app';
  
  const routes = ['', '/profil', '/portfolio', '/skills'];
  const locales = ['fr', 'en'] as const;
  
  const urls: MetadataRoute.Sitemap = [];

  const getPriority = (route: string, locale: string): number => {
    if (route === '' && locale === 'fr') return 1.0;      // Page d'accueil FR (principale)
    if (route === '' && locale === 'en') return 0.9;      // Page d'accueil EN
    if (route === '/portfolio') return 0.8;                // Page portfolio
    if (route === '/profil') return 0.8;                   // Page profil
    if (route === '/skills') return 0.8;                   // Page compétences
    return 0.6;                                            // Projets individuels
  };

  // Fonction helper pour déterminer la fréquence de changement
  const getChangeFrequency = (route: string): "yearly" | "monthly" | "weekly" | "daily" | "always" | "hourly" | "never" => {
    if (route === '') return 'monthly';                    // Page d'accueil change rarement
    if (route === '/portfolio') return 'weekly';           // Portfolio mis à jour régulièrement
    if (route === '/profil' || route === '/skills') return 'monthly';
    return 'monthly';                                      // Projets individuels
  };

  // 1. Ajouter les pages statiques
  routes.forEach(route => {
    locales.forEach(locale => {
      urls.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: getChangeFrequency(route),
        priority: getPriority(route, locale),
        alternates: {
          languages: {
            fr: `${baseUrl}/fr${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      });
    });
  });

  // 2. Ajouter les projets dynamiques depuis Firebase
  try {
    const snapshot = await adminDb.collection('projet').get();
    
    snapshot.docs.forEach(doc => {
      const data = doc.data();
      const projectId = doc.id;
      
      // Vérifier que le projet a les données nécessaires
      if (!data.title || !projectId) return;

      locales.forEach(locale => {
        urls.push({
          url: `${baseUrl}/${locale}/portfolio/${projectId}`,
          lastModified: data.updatedAt?.toDate() || data.createdAt?.toDate() || new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
          alternates: {
            languages: {
              fr: `${baseUrl}/fr/portfolio/${projectId}`,
              en: `${baseUrl}/en/portfolio/${projectId}`,
            },
          },
        });
      });
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des projets pour le sitemap:', error);
  }

  return urls;
}