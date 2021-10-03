import { HTMLProps, ReactNode } from "react";

enum EnumButtonSize {
    sm,
    md,
}

export interface ButtonProps extends HTMLProps<Partial<ButtonProps>> {
    variant?: "primary" | "secondary";
    buttonSize: EnumButtonSize | string;
    children?: ReactNode;
    type?: "submit" | "button";
    loading?: boolean;
}
