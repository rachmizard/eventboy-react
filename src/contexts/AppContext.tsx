import { useAppDispatch, useAppSelector } from "hooks";
import { createContext } from "react";
import { setDarkMode } from "store/general";
import { ThemeProvider } from "styled-components";
import { themes } from "utils";

interface IAppContext {
    theme: string;
    toggleThemeHandler: () => void;
}

export const AppContext = createContext<IAppContext | null>(null);

export default function AppProvider({ children }: any) {
    const theme = useAppSelector((state) => state.general.darkMode);
    const dispatch = useAppDispatch();

    function toggleThemeHandler(): void {
        const prevState = theme === "light" ? "dark" : "light";
        dispatch(setDarkMode(prevState));
    }

    const context = {
        theme,
        toggleThemeHandler,
    };

    const themeMode =
        theme === "light"
            ? themes.myThemes.lightTheme
            : themes.myThemes.darkTheme;

    return (
        <AppContext.Provider value={context}>
            <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
        </AppContext.Provider>
    );
}
