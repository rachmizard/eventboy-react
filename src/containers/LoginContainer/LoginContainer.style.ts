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
