import styled from "styled-components";
import { DividerProps } from "./Divider.interface";

export const LineHorizontal = styled.div<DividerProps>`
	border-bottom: ${(props) => props.dividerSize}px solid
		${({ theme }) => theme.borderPrimary};
`;

export const LineVertical = styled.div<DividerProps>`
	border-right: ${(props) => props.dividerSize}px solid
		${({ theme }) => theme.borderPrimary};
`;
