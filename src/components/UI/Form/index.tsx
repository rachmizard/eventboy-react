import React from "react";
import { FormComposition, FormProps } from "./Form.interface";
import { FormGroup, FormWrapper } from "./Form.style";

const Form: React.FC<FormProps> & FormComposition = ({
	children,
	onSubmit,
}) => {
	return <FormWrapper onSubmit={onSubmit}>{children}</FormWrapper>;
};

const Group: React.FC = ({ children }) => {
	return <FormGroup>{children}</FormGroup>;
};

Form.Group = Group;

export default Form;
