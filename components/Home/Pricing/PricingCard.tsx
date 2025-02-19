import React from "react";

interface PricingCardProps {
  price: string;
  plan: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ price, plan, features }) => {
  return (
    <div className="relative w-full mx-auto bg-white border-[7px] border-[#853aa7] text-center group hover:border-primary transition duration-700 ease-in-out">
      <div className="bg-[#853aa7] group-hover:bg-primary transition duration-700 ease-in-out text-white py-4">
        <span className="text-lg font-bold">{price}</span>
      </div>
      <div className="p-6 min-h-96 mb-5">
        <div className="text-xl font-bold uppercase mb-2">
          <span className="inline-block w-12 border-t-2 border-[#853aa7] mb-2" />
          <div className="text-primary">{plan}</div>
          <span className="inline-block w-12 border-t-2 border-[#853aa7] mt-0" />
        </div>
        <ul className="text-gray-700 space-y-3 text-start">
          {features.map((feature, index) => (
            <li key={index}>✓ {feature}</li>
          ))}
        </ul>
      </div>
      <div className="absolute -bottom-6 left-[50%] transform -translate-x-1/2">
        <button className="py-3 px-6 text-nowrap bg-[#853aa7] hover:bg-primary text-white transition duration-700 ease-in-out font-semibold">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
