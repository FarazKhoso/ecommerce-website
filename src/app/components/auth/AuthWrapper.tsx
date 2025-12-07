'use client';

import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import useAuthStore from '@/app/store/authStore';

const AuthWrapper: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { isAuthenticated, checkAuthStatus } = useAuthStore();

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  if (isAuthenticated) {
    return null; // If authenticated, don't show auth forms
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {isLogin ? (
        <LoginForm setIsLogin={setIsLogin} />
      ) : (
        <RegisterForm setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default AuthWrapper;