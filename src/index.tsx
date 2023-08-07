import React from "react";
import ReactDOM from "react-dom/client";

import MyRoutes from "./routes";

// Style
import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <MyRoutes />
    </React.StrictMode>
);
