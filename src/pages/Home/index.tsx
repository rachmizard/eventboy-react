import { Container } from "components";
import { EventContainer, HeroContainer } from "containers";
import { RouteComponentProps } from "react-router";

function Home(props: RouteComponentProps) {
	return (
		<Container>
			<HeroContainer />
			<EventContainer />
		</Container>
	);
}

export default Home;
