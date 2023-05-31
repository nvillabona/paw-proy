import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./theme/theme";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes  from "./routes/routes";
import Layout from "./components/layout/Layout";
import PrivateRoute from "./components/common/PrivaterRoute";

function App() {

    return (
        <ThemeProvider theme={appTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path={routes.login.path} element={routes.login.component} />
                    <Route path={routes.register.path} element={routes.register.component} />
                    <Route element={<Layout />}>
                        <Route path={routes.dashboard.path} element={<PrivateRoute>{routes.dashboard.component}</PrivateRoute>} />
                        <Route path={routes.profile.path} element={<PrivateRoute>{routes.profile.component}</PrivateRoute>} />
                        <Route path={routes.messages.path} element={<PrivateRoute>{routes.messages.component}</PrivateRoute> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
