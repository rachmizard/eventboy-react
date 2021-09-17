import { Layout } from "components";
import { AppProvider, FormProvider, ModalProvider } from "contexts";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "style/GlobalStyle";
import { RootRouter } from "./router";

function App() {
	return (
		<div className="App">
			<AppProvider>
				<GlobalStyle />
				<ModalProvider>
					<FormProvider>
						<Router>
							<Layout>
								<RootRouter />
							</Layout>
						</Router>
					</FormProvider>
				</ModalProvider>
			</AppProvider>
		</div>
	);
}

export default App;
