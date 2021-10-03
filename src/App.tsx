import { Layout } from "components";
import { AppProvider } from "contexts";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "store";
import { GlobalStyle } from "style/GlobalStyle";
import { RootRouter } from "./router";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <AppProvider>
                    <GlobalStyle />
                    <Router>
                        <Layout>
                            <RootRouter />
                        </Layout>
                    </Router>
                </AppProvider>
            </Provider>
        </div>
    );
}

export default App;
