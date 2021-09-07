export interface ICustomizeTheme {
	textPrimary: string;
	textSecondary: string;
	textTertiary: string;
	borderPrimary: string;
	borderSecondary: string;
	body: string;
}

export const colors = {
	black: {
		default: "#000000",
		100: "#101821",
	},
	white: {
		default: "#FFFFFF",
	},
	grey: {
		100: "#C4C4C4",
		200: "#B7B7B7",
		300: "#5C5C5C",
		400: "#454545",
	},
	purple: {
		default: "#4227FD",
	},
};

export const myThemes = {
	lightTheme: {
		textPrimary: colors.black.default,
		textSecondary: colors.white.default,
		textTertiary: colors.grey[300],
		textPurple: colors.purple.default,
		borderPrimary: colors.grey[100],
		borderSecondary: colors.grey[400],
		body: colors.white.default,
	},
	darkTheme: {
		textPrimary: colors.white.default,
		textSecondary: colors.white.default,
		textTertiary: colors.grey[100],
		textPurple: colors.purple.default,
		borderPrimary: colors.grey[100],
		borderSecondary: colors.grey[400],
		body: colors.black[100],
	},
};
