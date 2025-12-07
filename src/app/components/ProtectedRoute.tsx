'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/app/store/authStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuthStore();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, isLoading, router]);

  // Show nothing while loading or redirecting
  if (!isAuthenticated && !isLoading) {
    return null;
  }

  // If loading or authenticated, show the children
  if (isLoading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return <>{children}</>;
};

export default ProtectedRoute;