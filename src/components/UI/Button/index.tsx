import React from "react";
import { BaseButton, ButtonPrimary, ButtonSecondary } from "./Button.style";
import { ButtonProps } from "./Button.interface";

const Button: React.FC<ButtonProps> = ({ children, variant, buttonSize }) => {
	if (variant === "primary") {
		return <ButtonPrimary buttonSize={buttonSize}>{children}</ButtonPrimary>;
	}

	if (variant === "secondary") {
		return (
			<ButtonSecondary buttonSize={buttonSize}>{children}</ButtonSecondary>
		);
	}

	return <BaseButton buttonSize={buttonSize}>{children}</BaseButton>;
};

Button.defaultProps = {
	variant: "primary",
	buttonSize: "md",
};

export default Button;
