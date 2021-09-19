import styled from "styled-components";
import { FormProps } from "./Form.interface";

export const FormWrapper = styled.form<FormProps>`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 10px;
`;

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
