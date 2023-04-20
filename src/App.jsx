import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./theme/theme";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes  from "./routes/routes";
import Layout from "./components/layout/Layout";

function App() {

    return (
        <ThemeProvider theme={appTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path={routes.login.path} element={routes.login.component} />
                    <Route element={<Layout />}>
                        <Route path={routes.dashboard.path} element={routes.dashboard.component} />
                        <Route path={routes.profile.path} element={routes.profile.component} />
                        <Route path={routes.messages.path} element={routes.messages.component} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
