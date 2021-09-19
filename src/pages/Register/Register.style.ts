import styled from "styled-components";

export const RegisterWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const RegisterForm = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 20px;

	> div {
		.heading-register {
			.highlight {
				color: ${({ theme }) => theme.textPurple};
			}
		}
	}
`;
