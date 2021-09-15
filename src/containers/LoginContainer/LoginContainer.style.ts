import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "utils/theme";

export const LoginWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 30rem;
	height: 410px;
	background-color: ${({ theme }) => theme.card};
	border-radius: 10px;
	padding: 24px 26px;
`;

export const LoginHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 10px;
`;

export const LoginBody = styled.div`
	display: flex;
	flex-direction: column;

	> .row-header-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 35px;
	}
`;

export const FormLink = styled(Link)`
	color: ${colors.cyan[200]};
	font-family: "Ubuntu", sans-serif;
	font-size: 14px;
	text-decoration: none;

	:hover {
		text-decoration: underline;
	}
`;

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	> .forgot-password {
		align-self: flex-end;
		margin-bottom: 10px;
	}
`;

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Label = styled.label`
	font-size: 16px;
	font-weight: bold;
	color: ${({ theme }) => theme.textTertiary};
`;

export const Input = styled.input`
	padding: 12px;
	border: 2px solid ${({ theme }) => theme.input.border};
	border-radius: 10px;
	background-color: ${({ theme }) => theme.input.background};
	color: ${({ theme }) => theme.input.text};
	font-family: "Ubuntu", sans-serif;
	font-size: 16px;
	transition: border 0.25s;

	:focus {
		outline: none;
		border: 2px solid ${({ theme }) => theme.input.focus};
	}
`;
