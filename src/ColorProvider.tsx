import { ReactNode, createContext, useState } from 'react';

// 0. Types
export type Theme = "light" | "dark";

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

// 1. Create a Context
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// 2. Create a Provider component
export const ThemeProvider = ({ children,
  initialTheme = "light",
}: ThemeProviderProps) => {
   const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 3. Provide the value to its children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
     <p>test</p>
      {children}
    </ThemeContext.Provider>
  );
};
