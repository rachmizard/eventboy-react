import styled from "styled-components";
import { device } from "utils/theme";

export const EventContainerWrapper = styled.section`
	display: flex;
	flex-direction: column;
	transition: 0.25s;
	gap: 10px;
	align-items: center;

	@media ${device.laptop} {
		align-items: flex-start;
	}
`;

export const EventCardList = styled.div`
	display: flex;
	max-width: 100%;
	flex-direction: column;
	flex-wrap: nowrap;
	padding-inline: 30px;
	justify-content: center;

	@media ${device.mobileL} {
		flex-direction: row;
		flex-wrap: wrap;
		padding-inline: 0px;
	}
`;
