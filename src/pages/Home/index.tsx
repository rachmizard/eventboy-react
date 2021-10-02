import { Container, Gap, SearchBar } from "components";
import { EventContainer, HeroContainer } from "containers";
import { popular } from "mocks/popular";
import { upcoming } from "mocks/upcoming";
import { RouteComponentProps } from "react-router";

function Home(props: RouteComponentProps) {
    return (
        <Container>
            <HeroContainer />
            <SearchBar />
            <EventContainer events={popular} title="Most Popular events" />
            <Gap height={28} />
            <EventContainer events={upcoming} title="Upcoming events" />
        </Container>
    );
}

export default Home;
