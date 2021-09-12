import { Container, SearchBar } from "components";
import { EventContainer, HeroContainer } from "containers";
import { RouteComponentProps } from "react-router";

function Home(props: RouteComponentProps) {
	return (
		<Container>
			<HeroContainer />
			<SearchBar />
			<EventContainer title="Most Popular" />
		</Container>
	);
}

export default Home;
