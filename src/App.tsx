import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ForPartnersPage from "./pages/ForPartnersPage";
import NotFoundPage from "./pages/NotFoundPage";
import RoutesList from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.DEFAULT} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={RoutesList.HELP} element={<HelpPage />} />
          <Route path={RoutesList.HOW_IT_WORKS} element={<HowItWorksPage />} />
          <Route path={RoutesList.PARTNERS} element={<ForPartnersPage />} />
          <Route path={RoutesList.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
