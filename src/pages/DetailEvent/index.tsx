import { Event1, Event2, Event3 } from "assets";
import {
    Box,
    Button,
    Col,
    Container,
    Gap,
    Heading,
    Row,
    Text,
} from "components";
import { IoIosCalendar, IoIosCart } from "react-icons/io";
import { colors } from "utils/theme";
import { EventDescription, EventPictures } from "./DetailEvent.style";

const DetailEvent = () => {
    return (
        <Container>
            <Row gap={52} justify="space-between">
                <Col style={{ width: 455 }}>
                    <img
                        className="event-picture"
                        src={Event1}
                        alt="Event Pict"
                        style={{ width: "100%", objectFit: "contain" }}
                    />
                    <EventPictures>
                        <img src={Event1} alt="" />
                        <img src={Event2} alt="" />
                        <img src={Event3} alt="" />
                    </EventPictures>
                </Col>
                <Col>
                    <Box>
                        <Row
                            alignItems="center"
                            justify="space-between"
                            gap={10}>
                            <Col>
                                <Heading>
                                    Tame Impala Bandung Concert 2021
                                </Heading>
                            </Col>
                            <Col>
                                <Text
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 5,
                                    }}>
                                    <IoIosCalendar size={24} /> 23 september
                                </Text>
                            </Col>
                        </Row>
                        <Gap height={20} />
                        <Text
                            style={{
                                fontWeight: "bold",
                                color: colors.grey[300],
                                fontSize: 24,
                            }}>
                            $30.23
                        </Text>
                        <Gap height={20} />
                        <EventDescription>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Natus vitae adipisci
                                consectetur. Incidunt, aperiam culpa? Earum
                                alias tempora non odio laudantium nam unde
                                beatae est labore distinctio. Velit, nam
                                numquam! Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quae odio nesciunt optio
                                accusantium. Eius, commodi qui in iste repellat,
                                odio laboriosam, laudantium doloribus non vero
                                fugit explicabo mollitia alias quam? Lorem ipsum
                                dolor sit amet consectetur adipisicing elit.
                                Natus vitae adipisci consectetur. Incidunt,
                                aperiam culpa? Earum alias tempora non odio
                                laudantium nam unde beatae est labore
                                distinctio. Velit, nam numquam! Lorem ipsum
                                dolor sit amet consectetur, adipisicing elit.
                                Quae odio nesciunt optio accusantium. Eius,
                                commodi qui in iste repellat, odio laboriosam,
                                laudantium doloribus non vero fugit explicabo
                                mollitia alias quam?
                                <br />
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Natus vitae adipisci
                                consectetur. Incidunt, aperiam culpa? Earum
                                alias tempora non odio laudantium nam unde
                                beatae est labore distinctio. Velit, nam
                                numquam! Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quae odio nesciunt optio
                                accusantium. Eius, commodi qui in iste repellat,
                                odio laboriosam, laudantium doloribus non vero
                                fugit explicabo mollitia alias quam?
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Natus vitae adipisci
                                consectetur. Incidunt, aperiam culpa? Earum
                                alias tempora non odio laudantium nam unde
                                beatae est labore distinctio. Velit, nam
                                numquam! Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Quae odio nesciunt optio
                                accusantium. Eius, commodi qui in iste repellat,
                                odio laboriosam, laudantium doloribus non vero
                                fugit explicabo mollitia alias quam? Lorem ipsum
                                dolor sit amet consectetur adipisicing elit.
                                Natus vitae adipisci consectetur. Incidunt,
                                aperiam culpa? Earum alias tempora non odio
                                laudantium nam unde beatae est labore
                                distinctio. Velit, nam numquam! Lorem ipsum
                                dolor sit amet consectetur, adipisicing elit.
                                Quae odio nesciunt optio accusantium. Eius,
                                commodi qui in iste repellat, odio laboriosam,
                                laudantium doloribus non vero fugit explicabo
                                mollitia alias quam?
                            </Text>
                        </EventDescription>
                        <Gap height={20} />
                    </Box>
                    <Row gap={14} justify="flex-end">
                        <Col>
                            <Button
                                type="button"
                                buttonSize="md"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 5,
                                }}>
                                <IoIosCart /> Add to cart
                            </Button>
                        </Col>
                        <Col>
                            <Button type="button" buttonSize="md">
                                Buy
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailEvent;
