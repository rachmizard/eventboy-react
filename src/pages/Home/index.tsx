import { Container } from "components";
import { Hero } from "containers";
import { RouteComponentProps } from "react-router";

function Home(props: RouteComponentProps) {
	return (
		<Container>
			<Hero />
		</Container>
	);
}

export default Home;
