import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { GlobalStateProvider } from "./context/GlobalStateProvider";

export const MainRoute = () => (
  <Router>
    <GlobalStateProvider>
      <Header />
      <Routes>
        <Route path="/" element={<>dfdfdfdf+</>} />
      </Routes>
    </GlobalStateProvider>
  </Router>
);

export default MainRoute;
