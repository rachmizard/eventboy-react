import { Event1 } from "assets";
import { Container } from "components";
import { Wrapper } from "./DetailEvent.style";

const index = () => {
    return (
        <Container>
            <Wrapper>
                <img src={Event1} alt="" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi veniam quia et quibusdam voluptates repudiandae ut
                        quam molestias a consequatur praesentium quo, voluptas
                        doloremque itaque laborum autem alias blanditiis
                        dolores.
                    </p>
                </div>
            </Wrapper>
        </Container>
    );
};

export default index;
