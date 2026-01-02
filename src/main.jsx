import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "./index.css";

const rootE = document.getElementById("root");
const root = createRoot(rootE);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)