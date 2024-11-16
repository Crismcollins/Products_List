export interface Theme {
    colors: ThemeColors;
}

export interface ThemeColors {
    primary: Shades;
    secondary: Shades;
    background: string;
    white: string;
    black: string;
    gray: Shades;
    error: Shades;
    warning: Shades;
    success: Shades;
}

interface Shades {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
}