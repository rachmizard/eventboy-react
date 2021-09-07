import styled from "styled-components";

export const ToggleDarkModeButton = styled.button`
	background: none;
	border: none;
	padding: 10px 30px 10px 30px;
	cursor: pointer;
	font-family: "Source Sans Pro", sans-serif;
	color: ${({ theme }) => theme.textPrimary};
	font-weight: 600;
	font-size: 14px;

	> img {
		height: 20px;
	}
`;
