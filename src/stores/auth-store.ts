import { create } from 'zustand';

interface State {
  isAuthenticated: boolean;
}

interface Actions {
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<State & Actions>()(( set ) => ({
    isAuthenticated: false,

    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
}));
