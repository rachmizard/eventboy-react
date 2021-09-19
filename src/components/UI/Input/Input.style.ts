import styled from "styled-components";
import { InputProps } from "./Input.interface";

export const InputField = styled.input<InputProps>`
	padding: 8px;
	border: 2px solid
		${({ theme, hasError }) =>
			hasError ? theme.input.hasError : theme.input.border};
	border-radius: 10px;
	background-color: ${({ theme }) => theme.input.background};
	color: ${({ theme }) => theme.input.text};
	font-family: "Ubuntu", sans-serif;
	font-size: 14px;
	transition: border 0.25s;

	:focus {
		outline: none;
		border: 2px solid
			${({ theme, hasError }) =>
				hasError ? theme.input.hasError : theme.input.focus};
	}
`;

export const Label = styled.label`
	font-size: 16px;
	font-weight: bold;
	color: ${({ theme }) => theme.textTertiary};
`;

export const ErrorText = styled.small`
	color: ${({ theme }) => theme.input.hasError};
`;
