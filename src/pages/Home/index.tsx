import { Container, Divider, Gap, SearchBar } from "components";
import { EventContainer, HeroContainer } from "containers";
import { RouteComponentProps } from "react-router";

function Home(props: RouteComponentProps) {
	return (
		<Container>
			<HeroContainer />
			<SearchBar />
			<EventContainer title="Most Popular events" />
			<Gap height={68} />
			<Divider position="horizontal" dividerSize={2} />
			<Gap height={46} />
			<EventContainer title="Upcoming events" />
		</Container>
	);
}

export default Home;
