import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { NavRoutes } from "../routes/NavRoutes";
import { RED } from "../global/RED";
import { Footer } from "../components/foot/Footer";

export const App = () => {
    return (
        <Provider store={RED}>
            <React.Fragment>
                <NavRoutes />
                <Footer />
            </React.Fragment>
        </Provider>
    );
};


