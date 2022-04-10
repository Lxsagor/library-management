import React, { useMemo } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

function App() {
    const theme = useMemo(() => {
        return createTheme({
            typography: {
                fontFamily: ["Roboto"].join(","),
                h2: {
                    fontSize: 24,
                    fontWeight: 400,
                },
                h3: {
                    fontSize: 20,
                    fontWeight: 400,
                },
                h4: {
                    fontSize: 18,
                    fontWeight: 400,
                },
                h5: {
                    fontSize: 16,
                    fontWeight: 400,
                },
                h6: {
                    fontSize: 14,
                    fontWeight: 400,
                },
                body1: {
                    fontSize: 14,
                },
                body2: {
                    fontSize: 12,
                },
            },
            palette: {
                primary: {
                    main: "#009A6B",
                },
            },
        });
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
