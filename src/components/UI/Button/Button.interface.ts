import { ReactChild } from "react";

enum EnumButtonSize {
	sm,
	md,
}

export interface ButtonProps {
	variant?: "primary" | "secondary";
	buttonSize: EnumButtonSize | string;
	children?: ReactChild;
	type?: "submit" | "button";
}
