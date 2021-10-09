export type IAuthState = {
    token: string | null;
    isLoggedIn?: boolean;
    user?: any;
    role?: string;
};
