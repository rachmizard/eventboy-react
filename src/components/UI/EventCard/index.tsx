import { Button, Card } from "components";
import React from "react";
import { CardBody, CardCover } from "../Card";
import { EventCardProps } from "./EventCard.interface";
import { EventCardWrapper } from "./EventCard.style";
import { IoIosCalendar, IoIosCash } from "react-icons/io";

const EventCard: React.FC<EventCardProps> = ({
	imageUrl,
	alt,
	title,
	createdAt,
	price,
}) => {
	return (
		<Card>
			<CardCover imageUrl={imageUrl} alt={alt} />
			<CardBody>
				<EventCardWrapper>
					<div className="info">
						<h5>{title}</h5>
						<p>
							<IoIosCalendar size={20} />
							{createdAt}
						</p>
						<p>
							<IoIosCash />
							{price}
						</p>
					</div>
					<div className="action">
						<Button variant="primary" buttonSize="sm">
							Buy
						</Button>
					</div>
				</EventCardWrapper>
			</CardBody>
		</Card>
	);
};

export default EventCard;
