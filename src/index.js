import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";

const rootElement = document.getElementById("root");

const app = (
  <BrowserRouter>
    <CssBaseline />
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, rootElement);
