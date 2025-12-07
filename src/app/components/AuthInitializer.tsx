'use client';

import { useEffect } from 'react';
import useAuthStore from '@/app/store/authStore';

const AuthInitializer = () => {
  const { checkAuthStatus } = useAuthStore();

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  return null; // This component doesn't render anything
};

export default AuthInitializer;