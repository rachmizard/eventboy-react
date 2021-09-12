import styled from "styled-components";

export const EventCardWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	> .info {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		font-family: "Ubuntu", sans-serif;

		h5 {
			font-weight: bolder;
			font-size: 16px;
		}

		p {
			display: inline-flex;
			align-items: center;
			gap: 0.25rem;
			font-weight: lighter;
			color: ${(props) => props.theme.textTertiary};
			font-size: 14px;
		}
	}
`;
