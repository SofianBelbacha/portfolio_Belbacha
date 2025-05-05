// lib/useFirebaseAnalytics.ts
'use client';

import { useEffect } from 'react';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { app } from '@/firebase/firebase.config';
 
export const useFirebaseAnalytics = () => {
  useEffect(() => {
    const loadAnalytics = async () => {
      if (typeof window !== 'undefined') {
        const supported = await isSupported();
        if (supported) {
          getAnalytics(app);
        }
      }
    };
    loadAnalytics();
  }, []);
};
