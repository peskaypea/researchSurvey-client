import React from "react";
import Nav from "../components/Nav";
import Welcome from "../components/Welcome";
import MobileNavMenu from "../components/MobileNavMenu";
import Pricing from "../components/Pricing";
import About from "../components/About";
function Home({ theme, tab }) {
  return (
    <div className={theme ? "dark" : ""}>
      {tab === "Welcome" && <Welcome theme={theme} />}
      {tab === "Pricing" && <Pricing theme={theme} />}
      {tab === "About" && <About theme={theme} />}
    </div>
  );
}

export default Home;
