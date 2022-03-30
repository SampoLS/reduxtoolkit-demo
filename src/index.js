import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store/store";
import UserDetails from "./components/UserDetails";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:name" element={<UserDetails />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
);
