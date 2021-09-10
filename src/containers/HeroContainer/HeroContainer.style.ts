import styled from "styled-components";
import { device } from "utils/theme";

export const HeroSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-top: 2rem;
	transition: 0.25s;
	gap: 50px;

	.hero-image {
		height: 280px;
		width: auto;
	}

	@media ${device.laptop} {
		flex-direction: row;
		align-items: start;
		gap: 0px;
		.hero-image {
			height: 380px;
		}
	}
`;

export const HeroText = styled.h1`
	flex-grow: 0;
	font-size: 28px;
	margin-top: 3rem;
	text-align: center;
	margin-bottom: 22px;
	line-height: 1.1em;
	transition: 0.25s;

	@media ${device.laptop} {
		font-size: 48px;
		text-align: start;
	}
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
