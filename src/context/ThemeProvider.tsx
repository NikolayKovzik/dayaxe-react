import React, { createContext, useMemo, useState } from "react";
import { IThemeContext } from "./models";

export const ThemeContext = createContext<IThemeContext | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const themeContext = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
}
