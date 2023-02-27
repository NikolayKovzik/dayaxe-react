import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ForPartnersPage from "./pages/ForPartnersPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="for-partners" element={<ForPartnersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
