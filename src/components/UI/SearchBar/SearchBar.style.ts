import styled from "styled-components";

export const SearchBarWrapper = styled.div`
	display: flex;
	gap: 0.8rem;
	padding: 16px 37px;
	margin-bottom: 25px;
	box-shadow: 0px 3px 49px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
`;

export const InputTextSearch = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
`;

export const InputText = styled.input`
	appearance: none;
	border: none;
	background-color: ${({ theme }) => theme.input.background};
	color: ${({ theme }) => theme.input.text};
	width: 100%;
	transition: 0.25ms;
	outline: none;
	padding: 10px;
	border-radius: 10px;
	font-family: "Ubuntu", sans-serif;
	font-size: 18px;
`;
