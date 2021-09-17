import React from "react";
import { InputField, Label } from "./Input.style";
import { InputProps } from "./Input.interface";
import { useForm } from "hooks";

const Input: React.FC<InputProps> = ({
	label,
	name,
	hasError,
	...otherProps
}) => {
	const { onSetField } = useForm();

	function onChangeField(fieldName: any, value: any) {
		onSetField(fieldName, value);
	}

	return (
		<>
			<Label htmlFor={name}>{label}</Label>
			<InputField
				{...otherProps}
				onChange={({ target }) => onChangeField(name, target.value)}
				autoComplete="current-password"
				hasError={hasError}
			/>
		</>
	);
};

export default Input;
