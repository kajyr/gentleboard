import React from "react";

import Sidebar from "../organisms/Sidebar";
import Page from "../pages/Page";

const Home = ({ sideBarConfig, children }) => {
  return (
    <>
      <Page aside={<Sidebar sideBarConfig={sideBarConfig} />}>{children}</Page>
    </>
  );
};

export default Home;
