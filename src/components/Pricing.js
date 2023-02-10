import React from "react";

import PricingCard from "components/PricingCard";

const Pricing = ({ theme }) => {
  return (
    <div className={theme ? "dark" : ""}>
      <div className="flex justify-center p-6 dark:text-white dark:bg-slate-700">
        <h1 className="text-3xl md:text-5xl mt-3">
          Choose a plan that works for you
        </h1>
      </div>
      <div className="flex justify-center dark:bg-slate-700 dark:h-screen">
        <PricingCard theme={theme} />
      </div>
    </div>
  );
};

export default Pricing;
