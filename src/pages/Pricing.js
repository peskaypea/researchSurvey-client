import React from "react";
import Nav from "../components/Nav";
import PricingCard from "components/PricingCard";

const Pricing = () => {
  return (
    <div>
      <Nav />
      <div className="flex justify-center">
        <h1 className="text-3xl md:text-5xl mt-3">
          Choose a plan that works for you
        </h1>
      </div>
      <div className="flex justify-center">
        <PricingCard />
      </div>
    </div>
  );
};

export default Pricing;
