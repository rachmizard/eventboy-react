enum EnumButtonSize {
	sm,
	md,
}

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
	variant?: "primary" | "secondary";
	buttonSize: EnumButtonSize | string;
	children?: any;
}
