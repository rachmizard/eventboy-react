import { DefaultTheme } from "styled-components";

export interface ICustomizeTheme {
    [key: string]: DefaultTheme;
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
    cyan: {
        200: "#3FA5BC",
    },
    red: {
        100: "#e31a17",
    },
    yellow: {
        100: "#e8ab27",
    },
};

const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
};

export const myThemes: ICustomizeTheme = {
    lightTheme: {
        textPrimary: colors.black.default,
        textSecondary: colors.white.default,
        textTertiary: colors.grey[300],
        textPurple: colors.purple.default,
        borderPrimary: colors.grey[100],
        borderSecondary: colors.grey[400],
        borderTertiary: colors.black[100],
        body: colors.white.default,
        card: colors.white.default,
        toast: {
            backgroundDanger: colors.red[100],
            backgroundSuccess: colors.purple.default,
            backgroundWarning: colors.yellow[100],
            text: colors.white.default,
        },
        input: {
            text: colors.black.default,
            background: colors.white.default,
            border: colors.black.default,
            focus: colors.cyan[200],
            hasError: colors.red[100],
        },
        button: {
            primary: colors.purple.default,
            secondary: colors.grey[100],
        },
    },
    darkTheme: {
        textPrimary: colors.white.default,
        textSecondary: colors.white.default,
        textTertiary: colors.white.default,
        textPurple: colors.purple.default,
        borderPrimary: colors.grey[100],
        borderSecondary: colors.grey[400],
        borderTertiary: colors.white.default,
        body: colors.black[100],
        card: colors.black[100],
        toast: {
            backgroundDanger: colors.red[100],
            backgroundSuccess: colors.purple.default,
            backgroundWarning: colors.yellow[100],
            text: colors.white.default,
        },
        input: {
            text: colors.white.default,
            background: colors.black[100],
            border: colors.white.default,
            focus: colors.cyan[200],
            hasError: colors.red[100],
        },
        button: {
            primary: colors.purple.default,
            secondary: colors.grey[100],
        },
    },
};
