import { Event1 } from "assets";
import { EventCard, Heading } from "components";
import React from "react";
import { EventCardList, EventContainerWrapper } from "./EventContainer.style";

interface EventContainerProps {}

const EventContainer: React.FC<EventContainerProps> = () => {
	return (
		<EventContainerWrapper>
			<Heading>Most Popular</Heading>
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
