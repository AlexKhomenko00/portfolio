import React from "react";

import ProfileCard from "components/ProfileCard/ProfileCard";
import Portfolio from "components/Portfolio/Portfolio";
import ToolsSection from "components/ToolsSection/ToolsSection";

const MainPage = () => {
  return (
    <>
      <ProfileCard />

      <Portfolio />

      <ToolsSection />
    </>
  );
};

export default MainPage;
