import styled from "styled-components";
import { ButtonProps } from "./Button.interface";

export const BaseButton = styled.button<ButtonProps>`
	display: inline-block;
	font-family: "Source Sans Pro", sans-serif;
	font-weight: bold;
	border: none;
	border-radius: 10px;
	width: 100%;
	transition: 0.15s;
	padding: ${(props) => (props.buttonSize === "md" ? "8px 20px" : "5px 18px")};
	cursor: pointer;
`;

export const ButtonPrimary = styled(BaseButton)`
	background-color: ${(props) => props.theme.button.primary};
	color: ${(props) => props.theme.textSecondary};
	&:hover {
		background-color: ${(props) => props.theme.button.secondary};
		color: ${(props) => props.theme.textSecondary};
	}
`;

export const ButtonSecondary = styled(BaseButton)`
	background-color: ${(props) => props.theme.button.secondary};
	color: ${(props) => props.theme.textTertiary};
	&:hover {
		background-color: ${(props) => props.theme.button.primary};
		color: ${(props) => props.theme.textSecondary};
	}
`;
