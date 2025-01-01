import React from "react";

import PricingCard from "./PricingCard";

const pricingData = [
  {
    price: "Monthly 5000 Taka",
    plan: "Basic Plan",
    features: [
      "1 - 499 User Access",
      "Additional Package",
      "Software Installments- 30,000/-",
      "Finger Matching Installation - 20,000/- (Per Matching)",
      "Digital ID Card at Actual Cost",
    ],
  },
  {
    price: "10 Taka Per Subscription",
    plan: "Standard Plan",
    features: [
      "500 - 1999 User Access",
      "Additional Package",
      "Software Installments- 30,000/-",
      "Finger Matching Installation - 20,000/- (Per Matching)",
      "Digital ID Card at Actual Cost",
    ],
  },
  {
    price: "08 Taka Per Subscription",
    plan: "Premium Plan",
    features: [
      "2000 - 4999 User Access",
      "Additional Package",
      "Software Installments- 30,000/-",
      "Finger Matching Installation - 20,000/- (Per Matching)",
      "Digital ID Card at Actual Cost",
    ],
  },
  {
    price: "05 Taka Per Subscription",
    plan: "Ultimate Plan",
    features: [
      "5000+ User Access",
      "Additional Package",
      "Software Installments- 30,000/-",
      "Finger Matching Installation - 20,000/- (Per Matching)",
      "Digital ID Card at Actual Cost",
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="pt-20" id="pricing">
      <div className="lg:w-9/12 mx-auto ">
        <div className="mb-20 lg:mt-0">
          <div className="flex justify-center">
            <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
          </div>
          <h1 className="text-4xl font-bold text-center py-4 text-primary">
            Pricing
          </h1>
          <div className="flex justify-center">
            <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {pricingData.map((data, index) => (
            <PricingCard
              key={index}
              features={data.features}
              plan={data.plan}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
