import React from "react";
import { CardCoverProps, CardProps } from "./Card.interface";
import { CardBodyWrapper, CardCoverWrapper, CardWrapper } from "./Card.style";

const Card: React.FC<CardProps> = ({ children }) => {
	return <CardWrapper>{children}</CardWrapper>;
};

export const CardCover: React.FC<CardCoverProps> = ({ imageUrl, alt }) => {
	return (
		<CardCoverWrapper>
			<img src={imageUrl} alt={alt} />
		</CardCoverWrapper>
	);
};

export const CardBody: React.FC = ({ children }) => {
	return <CardBodyWrapper>{children}</CardBodyWrapper>;
};

export default Card;
