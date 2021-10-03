import { ApiService } from "./api.service";

const api = new ApiService();

export const signIn = (payload: any) => {
    return api.post("/login", payload);
};

export const signUp = (payload: any) => {
    return api.post("/register", payload);
};
