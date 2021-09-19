import { Layout } from "components";
import { AppProvider } from "contexts";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "style/GlobalStyle";
import { RootRouter } from "./router";

function App() {
	return (
		<div className="App">
			<AppProvider>
				<GlobalStyle />
				<Router>
					<Layout>
						<RootRouter />
					</Layout>
				</Router>
			</AppProvider>
		</div>
	);
}

export default App;
