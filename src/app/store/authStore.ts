import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  redirectAfterLogin: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  checkAuthStatus: () => void;
  setRedirectAfterLogin: (path: string | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  redirectAfterLogin: null,

  login: async (email: string, password: string) => {
    // Simple test authentication - in a real app, you'd call an API
    // For testing purposes, allow any email/password combination
    // but verify against a simple test user
    if (email === 'test@example.com' && password === 'password') {
      const user = {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
      };

      localStorage.setItem('user', JSON.stringify(user));
      set({ user, isAuthenticated: true, isLoading: false });
      return true;
    }

    // For demo purposes, also allow any email with 'demo' and any password
    if (email === 'demo@example.com') {
      const user = {
        id: '2',
        name: 'Demo User',
        email: 'demo@example.com',
      };

      localStorage.setItem('user', JSON.stringify(user));
      set({ user, isAuthenticated: true, isLoading: false });
      return true;
    }

    return false; // Invalid credentials
  },

  register: async (name: string, email: string, password: string) => {
    // Simple test registration
    // In a real app, you would send this to a backend server
    const newUser = {
      id: Date.now().toString(), // Simple ID generation for testing
      name,
      email,
    };

    localStorage.setItem('user', JSON.stringify(newUser));
    set({ user: newUser, isAuthenticated: true, isLoading: false });
    return true;
  },

  logout: () => {
    localStorage.removeItem('user');
    set({ user: null, isAuthenticated: false, isLoading: false });
  },

  checkAuthStatus: () => {
    // Check if user info exists in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        set({ user, isAuthenticated: true, isLoading: false });
        return;
      } catch (error) {
        console.error('Failed to parse user from localStorage', error);
      }
    }

    set({ user: null, isAuthenticated: false, isLoading: false });
  },

  setRedirectAfterLogin: (path: string | null) => set({ redirectAfterLogin: path }),
}));

export default useAuthStore;