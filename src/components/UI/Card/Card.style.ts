import styled from "styled-components";
import { device } from "utils/theme";

export const CardWrapper = styled.div`
	display: block;
	border-radius: 10px;
	margin: 18px 18px 18px 0px;
	width: 100%;
	box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);

	@media ${device.mobileL} {
		width: 250px;
	}
`;

export const CardCoverWrapper = styled.div`
	> img {
		width: 100%;
		object-fit: cover;
	}
`;

export const CardBodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 12px;
`;
