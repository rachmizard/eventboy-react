import styled from "styled-components";
import { HeadingProps } from "./Typography.interface";

const HEADING_SIZE = {
	lg: "36px",
	md: "24px",
	sm: "18px",
};

export const Heading = styled.h1<HeadingProps>`
	font-size: ${(props) => {
		if (props.size === "lg") {
			return HEADING_SIZE.lg;
		}
		if (props.size === "md") {
			return HEADING_SIZE.md;
		}
		if (props.size === "sm") {
			return HEADING_SIZE.sm;
		}
	}};
	font-weight: bold;
`;

export const Text = styled.p``;
