import styled from "styled-components";
import { ButtonProps } from "./Button.interface";

export const BaseButton = styled.button<ButtonProps>`
	display: inline-block;
	font-family: "Ubuntu", sans-serif;
	font-weight: 500;
	font-size: ${(props) => (props.buttonSize === "md" ? "16px" : "14px")};
	border: none;
	border-radius: 10px;
	transition: 0.25s;
	white-space: nowrap;
	padding: ${(props) => (props.buttonSize === "md" ? "8px 20px" : "5px 18px")};
	cursor: pointer;
`;

export const ButtonPrimary = styled(BaseButton)`
	background-color: ${(props) => props.theme.button.primary};
	color: ${(props) => props.theme.textSecondary};

	&:hover {
		transition: background 0.25s;
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
