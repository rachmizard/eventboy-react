import { Moon, Sun } from "assets";
import React from "react";
import { ToggleDarkModeProps } from "./ToggleDarkMode.interface";
import { ToggleDarkModeButton } from "./ToggleDarkMode.style";

const ToggleDarkMode: React.FC<ToggleDarkModeProps> = ({
	onClick,
	darkMode,
}) => {
	const themeModeIcon = darkMode === "light" ? Moon : Sun;

	return (
		<ToggleDarkModeButton onClick={onClick}>
			<img src={themeModeIcon} alt="Icon Dark Mode" />
		</ToggleDarkModeButton>
	);
};

ToggleDarkMode.defaultProps = {
	darkMode: "light",
};

export default ToggleDarkMode;
