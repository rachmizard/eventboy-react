import React from "react";
import { H1 } from "./Typography.style";

interface HeadingProps {
	size?: "sm" | "md" | "lg";
}

export const Heading: React.FC<HeadingProps> = ({ children, size }) => {
	return <H1>{children}</H1>;
};
