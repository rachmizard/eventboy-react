import React from "react";
import { TypographyProps } from "./Typography.interface";
import { H1 } from "./Typography.style";

export const Heading: React.FC<TypographyProps> = ({ children }) => {
	return <H1>{children}</H1>;
};
