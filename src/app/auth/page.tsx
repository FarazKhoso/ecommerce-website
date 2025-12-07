'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AuthWrapper from '../components/auth/AuthWrapper';
import useAuthStore from '../store/authStore';
import useCartStore from '../store/cartStore';

const AuthPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuthenticated, redirectAfterLogin } = useAuthStore();
  const { addItem } = useCartStore();

  React.useEffect(() => {
    // Check for redirect param in URL or use the stored redirect path
    const requestedPath = searchParams.get('redirect');
    if (requestedPath && !redirectAfterLogin) {
      // Only set if not already set
      setTimeout(() => useAuthStore.getState().setRedirectAfterLogin(requestedPath), 0);
    }

    if (isAuthenticated) {
      // Check if there's a pending cart item to add after login
      const pendingCartItem = localStorage.getItem('pendingCartItem');
      if (pendingCartItem) {
        try {
          const item = JSON.parse(pendingCartItem);
          addItem(item);
          // Clear the pending cart item
          localStorage.removeItem('pendingCartItem');
        } catch (error) {
          console.error('Error parsing pending cart item:', error);
        }
      }

      // If there's a redirect path, go there, otherwise go to home
      const pathToRedirect = redirectAfterLogin || '/';
      useAuthStore.getState().setRedirectAfterLogin(null); // Clear the redirect
      router.push(pathToRedirect);
    }
  }, [isAuthenticated, redirectAfterLogin, router, searchParams, addItem]);

  if (isAuthenticated) {
    return null; // Don't render anything if already authenticated
  }

  return <AuthWrapper />;
};

const AuthPage = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <AuthPageContent />
    </React.Suspense>
  );
};

export default AuthPage;