import { Button, Card } from "components";
import React from "react";
import { CardBody, CardCover } from "../Card";
import { EventCardProps } from "./EventCard.interface";
import { EventCardWrapper } from "./EventCard.style";
import { IoIosCalendar, IoIosCash } from "react-icons/io";
import { useHistory } from "react-router";

const EventCard: React.FC<EventCardProps> = ({
    imageUrl,
    alt,
    title,
    createdAt,
    price,
}) => {
    const history = useHistory();

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
                        <Button
                            variant="primary"
                            onClick={() => history.push(`/event/${title}`)}
                            buttonSize="sm">
                            Buy
                        </Button>
                    </div>
                </EventCardWrapper>
            </CardBody>
        </Card>
    );
};

export default EventCard;
