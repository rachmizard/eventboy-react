import { EventCard, Heading } from "components";
import { IEvent } from "interfaces/event.interface";
import React from "react";
import { EventCardList, EventContainerWrapper } from "./EventContainer.style";

interface EventContainerProps {
    title: string;
    events: Array<IEvent>;
}

const EventContainer: React.FC<EventContainerProps> = ({ title, events }) => {
    return (
        <EventContainerWrapper>
            <Heading>{title}</Heading>
            <EventCardList>
                {events.map((event, idx) => {
                    return (
                        <EventCard
                            key={idx}
                            title={event.eventName}
                            imageUrl={event.pic}
                            createdAt={event.date}
                            price={event.price}
                        />
                    );
                })}
            </EventCardList>
        </EventContainerWrapper>
    );
};

export default EventContainer;
