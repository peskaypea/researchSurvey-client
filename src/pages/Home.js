import React from "react";
import Nav from "../components/Nav";
import Welcome from "../components/Welcome";
import MobileNavMenu from "../components/MobileNavMenu";

function Home({ theme }) {
  return (
    <div className={theme ? "dark" : ""}>
      <Welcome />
    </div>
  );
}

export default Home;
