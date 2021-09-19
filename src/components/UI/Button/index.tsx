import React from "react";
import { BaseButton, ButtonPrimary, ButtonSecondary } from "./Button.style";
import { ButtonProps } from "./Button.interface";

const Button: React.FC<ButtonProps> = ({
	children,
	variant,
	buttonSize,
	type,
	...props
}) => {
	if (variant === "primary") {
		return (
			<ButtonPrimary buttonSize={buttonSize} type={type}>
				{children}
			</ButtonPrimary>
		);
	}

	if (variant === "secondary") {
		return (
			<ButtonSecondary buttonSize={buttonSize} type={type}>
				{children}
			</ButtonSecondary>
		);
	}

	return (
		<BaseButton buttonSize={buttonSize} type={type}>
			{children}
		</BaseButton>
	);
};

Button.defaultProps = {
	variant: "primary",
	buttonSize: "md",
};

export default Button;
