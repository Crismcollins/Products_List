
import { AppTheme, darkTheme, lightTheme } from '@styles/themes';
import { create } from 'zustand';

type State = {
  isDarkMode: boolean;
  theme: AppTheme;
};

type Actions = {
    setTheme: () => void;
}

export const useThemeStore = create<State & Actions>((set) => ({
  isDarkMode: false,
  theme: lightTheme,
  setTheme: () =>
    set((state) => {
      const isDarkMode = !state.isDarkMode;
      return {
        isDarkMode,
        theme: isDarkMode ? darkTheme : lightTheme,
      };
    }),
}));
