import { create } from 'zustand';

interface State {
  isAuthenticated: boolean;
  token: string | null;
}

interface Actions {
  setToken: (token:string) => void;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<State & Actions>()(( set ) => ({
    isAuthenticated: false,
    token: null,

    setToken: (token: string) => {
      if (token.length > 0)
        set({ token, isAuthenticated: true });
    },
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
}));
