import { Event1 } from "assets";
import { EventCard, Heading } from "components";
import React from "react";
import { EventCardList, EventContainerWrapper } from "./EventContainer.style";

interface EventContainerProps {
	title: string;
}

const EventContainer: React.FC<EventContainerProps> = ({ title }) => {
	return (
		<EventContainerWrapper>
			<Heading>{title}</Heading>
			<EventCardList>
				{[0, 1, 2, 3].map((idx) => {
					return (
						<EventCard
							key={idx}
							title="Coachela"
							imageUrl={Event1}
							createdAt="7, September 2021"
							price={20000}
						/>
					);
				})}
			</EventCardList>
		</EventContainerWrapper>
	);
};

export default EventContainer;
