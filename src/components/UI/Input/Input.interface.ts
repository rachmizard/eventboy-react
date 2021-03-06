import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	name?: string;
	hasError?: boolean;
	errorMessage?: string;
}
