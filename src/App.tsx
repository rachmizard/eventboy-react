import { Layout } from "components";
import { AppProvider, ModalProvider } from "contexts";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "style/GlobalStyle";
import { RootRouter } from "./router";

function App() {
	return (
		<div className="App">
			<AppProvider>
				<GlobalStyle />
				<ModalProvider>
					<Router>
						<Layout>
							<RootRouter />
						</Layout>
					</Router>
				</ModalProvider>
			</AppProvider>
		</div>
	);
}

export default App;
