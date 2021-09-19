import React from "react";
import { InputProps } from "./Input.interface";
import { ErrorText, InputField, Label } from "./Input.style";

const Input: React.FC<InputProps> = ({
	label,
	name,
	hasError,
	errorMessage,
	...otherProps
}) => {
	return (
		<>
			<Label htmlFor={name}>{label}</Label>
			<InputField id={name} hasError={hasError} {...otherProps} />
			<ErrorText>{errorMessage ? errorMessage : null}</ErrorText>
		</>
	);
};

export default Input;
