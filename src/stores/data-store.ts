import { create } from 'zustand';

interface State {
  loading: boolean;
}

interface Actions {
  setLoading: (isLoading: boolean) => void;
}

export const useDataStore = create<State & Actions>()(( set ) => ({
  loading: true,

  setLoading: (isLoading: boolean) => set({ loading: isLoading }),
}));
