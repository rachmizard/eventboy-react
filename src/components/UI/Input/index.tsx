import { useForm } from "hooks";
import React from "react";
import { InputProps } from "./Input.interface";
import { ErrorText, InputField, Label } from "./Input.style";

const Input: React.FC<InputProps> = ({
	label,
	name,
	hasError,
	...otherProps
}) => {
	const { handleChange, touched, handleBlur, errors } = useForm();

	return (
		<>
			<Label htmlFor={name}>{label}</Label>
			<InputField
				id={name}
				onChange={handleChange}
				onBlur={handleBlur}
				hasError={hasError}
				{...otherProps}
			/>
			<ErrorText>
				{name && touched[name] && errors[name] ? errors[name] : null}
			</ErrorText>
		</>
	);
};

export default Input;
