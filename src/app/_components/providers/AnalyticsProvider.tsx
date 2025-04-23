'use client';

import { useFirebaseAnalytics } from '@/lib/useFirebaseAnalytics';

export function AnalyticsProvider() {
  useFirebaseAnalytics();
  return null;
}
