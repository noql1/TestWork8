import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const useAuth = create<AuthState>()(
  persist(
    set => ({
      token: null,
      user: null,
      login: (token, user) => set({ token, user }),
      logout: () => set({ token: null, user: null }),
    }),
    { name: 'auth-storage' },
  ),
);

export default useAuth;
