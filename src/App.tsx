import { theme } from "./theme";
import Router from "./router/Router";
import client from "./api/ApolloClient";
import { routes } from "./router/config";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <Router routes={routes} />
                </BrowserRouter>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
