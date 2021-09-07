import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "utils";

interface IAppContext {
	theme: string;
	toggleThemeHandler: () => void;
}

export const AppContext = createContext<IAppContext | null>(null);

export default function AppProvider({ children }: any) {
	const [theme, setTheme] = useState<string>("light");

	function toggleThemeHandler(): void {
		setTheme((prevState) => {
			return prevState === "light" ? "dark" : "light";
		});
	}

	const context = {
		theme,
		toggleThemeHandler,
	};

	const themeMode =
		theme === "light" ? themes.myThemes.lightTheme : themes.myThemes.darkTheme;

	return (
		<AppContext.Provider value={context}>
			<ThemeProvider theme={themeMode}>{children}</ThemeProvider>
		</AppContext.Provider>
	);
}
