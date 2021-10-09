import { store } from "store";

export const existingRoles = store.getState().auth;

export const checkAuth = (roles: string[]): boolean => {
    if (roles.includes(existingRoles.role) || roles.includes("*")) {
        return true;
    }

    return false;
};
