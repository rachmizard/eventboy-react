import styled from "styled-components";

export const HeroSection = styled.section`
	display: flex;
	justify-content: space-between;
	margin-top: 2rem;
`;

export const HeroText = styled.h1`
	font-size: 48px;
	margin-top: 3rem;
	margin-bottom: 22px;
	line-height: 1.1em;
`;

export const HeroTextHightlight = styled.span`
	color: ${({ theme }) => theme.textPurple};
`;

export const HeroDescription = styled.p`
	font-size: 18px;
	font-weight: normal;
	color: ${({ theme }) => theme.textTertiary};
`;

export const Wrapper = styled.div`
	max-width: 375px;
`;
