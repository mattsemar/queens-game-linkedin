import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import PageGameLevel from "./pages/PageGameLevel";
import PageLevelSelection from "./pages/PageLevelSelection";
import PageBonusLevelsList from "./pages/PageBonusLevelsList";
import PageBonusLevel from "./pages/PageBonusLevel";
import PageCommunityLevelsList from "./pages/PageCommunityLevelsList";
import PageCommunityLevel from "./pages/PageCommunityLevel";
import PageLevelBuilder from "./pages/PageLevelBuilder";
import PageNotFound from "./pages/PageNotFound";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";
import "./i18n";

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Router>
          <Routes>
            <Route path="/" element={<PageCommunityLevelsList />} />

            <Route
              path="/community-levels"
              element={<PageCommunityLevelsList />}
            />
            <Route
              path="/community-level/:id"
              element={<PageCommunityLevel />}
            />
          </Routes>
        </Router>
        <ThemeSwitcher />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
