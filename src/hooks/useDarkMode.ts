import { AppContext } from "contexts/AppContext";
import { useContext } from "react";

function useDarkMode() {
	const theme = useContext(AppContext);

	return {
		theme: theme?.theme,
		toggleThemeHandler: theme?.toggleThemeHandler,
	};
}

export default useDarkMode;
