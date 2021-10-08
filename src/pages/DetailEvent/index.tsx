import { Event1 } from "assets";
import { Button, Container, Gap, Heading, Text } from "components";
import { colors } from "utils/theme";
import {
    EventAction,
    EventDescription,
    EventInfo,
    EventPicture,
    EventPictures,
    Wrapper,
} from "./DetailEvent.style";
import { IoIosCart } from "react-icons/io";

const DetailEvent = () => {
    return (
        <Container>
            <Wrapper>
                <EventPicture>
                    <img src={Event1} alt="" />
                    <EventPictures>
                        <img src={Event1} alt="" />
                        <img src={Event1} alt="" />
                        <img src={Event1} alt="" />
                        <img src={Event1} alt="" />
                        <img src={Event1} alt="" />
                    </EventPictures>
                </EventPicture>
                <EventInfo>
                    <div>
                        <Heading>Tame Impala Bandung Concert 2021</Heading>
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
                    </div>
                    <EventAction>
                        <Button type="button" buttonSize="md">
                            <IoIosCart /> Add to cart
                        </Button>
                        <Gap width={14} />
                        <Button type="button" buttonSize="md">
                            Buy
                        </Button>
                    </EventAction>
                </EventInfo>
            </Wrapper>
        </Container>
    );
};

export default DetailEvent;
