'use client';

import React from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import useAuthStore from '../../store/authStore';

const ProfilePage = () => {
  const { user } = useAuthStore();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Profile</h1>

            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-lg font-medium text-gray-900">Account Information</h2>
            </div>

            <div className="mt-4">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1 text-gray-900">{user?.name}</div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1 text-gray-900">{user?.email}</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Account Status</h3>
              <p className="mt-1 text-sm text-gray-500">Your account is active and in good standing.</p>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ProfilePage;