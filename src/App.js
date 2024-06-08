import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./page/Main/Main.jsx";

const root = createRoot(document.getElementById("root"));
root.render(React.createElement(Main));
