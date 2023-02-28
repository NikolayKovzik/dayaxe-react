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
        <Route path={RoutesList.default} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={RoutesList.help} element={<HelpPage />} />
          <Route path={RoutesList.howItWorks} element={<HowItWorksPage />} />
          <Route path={RoutesList.partners} element={<ForPartnersPage />} />
          <Route path={RoutesList.notFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
