import React from "react";
import "./App.css";
import Luke from "@public/Luke.webp";

export const App = () => {
    return (
        <React.Fragment>
            <h1>Luke from Wakanda Forever</h1>
            <img 
                src={Luke} alt="Luke in Wakanda" 
                height={"600px"} width={"auto"}
            />
        </React.Fragment>
    );
};


