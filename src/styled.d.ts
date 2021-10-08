import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        textPrimary: string;
        textSecondary: string;
        textTertiary: string;
        textPurple: string;
        borderPrimary: string;
        borderSecondary: string;
        borderTertiary: string;
        body: string;
        card: string;
        toast: {
            backgroundDanger: string;
            backgroundSuccess: string;
            backgroundWarning: string;
            text: string;
        };
        input: {
            text: string;
            background: string;
            border: string;
            focus: string;
            hasError: string;
        };
        button: {
            primary: string;
            secondary: string;
        };
    }
}
