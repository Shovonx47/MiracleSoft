import React from "react";

import PricingCard from "./PricingCard";

const pricingData = [
  {
    price: 99,
    plan: "Basic Plan",
    features: [
      "Free Setup",
      "20GB Storage",
      "Unlimited Users",
      "Free WordPress Tutorials",
      "Included Live Streaming",
    ],
  },
  {
    price: 199,
    plan: "Standard Plan",
    features: [
      "Free Setup",
      "20GB Storage",
      "Unlimited Users",
      "Free WordPress Tutorials",
      "Included Live Streaming",
    ],
  },
  {
    price: 299,
    plan: "Premium Plan",
    features: [
      "Free Setup",
      "20GB Storage",
      "Unlimited Users",
      "Free WordPress Tutorials",
      "Included Live Streaming",
    ],
  },
  {
    price: 399,
    plan: "Ultimate Plan",
    features: [
      "Free Setup",
      "20GB Storage",
      "Unlimited Users",
      "Free WordPress Tutorials",
      "Included Live Streaming",
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <div className=" lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {pricingData.map((data, index) => (
        <PricingCard
          key={index}
          features={data.features}
          plan={data.plan}
          price={data.price}
        />
      ))}
    </div>
  );
};

export default Pricing;
