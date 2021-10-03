import { object, string, SchemaOf } from "yup";

interface RegisterSchema {
    name: string;
    email: string;
    password: string;
}

interface LoginSchema {
    email: string;
    password: string;
}

export const RegisterSchemaValidator: SchemaOf<RegisterSchema> = object().shape(
    {
        name: string()
            .required("Username is required")
            .min(6, "Username min 6 characters"),
        email: string().email("Email is invalid").required("Email is required"),
        password: string()
            .min(6, "Password should be 6 characters or greater")
            .required("Password is required"),
    }
);

export const LoginSchemaValidator: SchemaOf<LoginSchema> = object()
    .shape({
        email: string().email("Email is invalid").required("Email is required"),
        password: string()
            .min(6, "Password should be 6 characters or greater")
            .required("Password is required"),
    })
    .defined();
