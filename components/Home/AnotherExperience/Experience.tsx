import React from "react";

import { workExperience } from "./data";

import { MoveBorderColor } from "@/ui/MovingBorders";

const ModernExperience = () => {
  return (
    <div className="py-20 w-full md:w-10/12 px-[10px] lg:px-0 lg:mx-auto dark:bg-[radial-gradient(circle_at_top,#5a7885_0%,transparent_30%,transparent_60%,transparent_90%,transparent_100%)] ">
      <div className="my-16 mt-16 lg:mt-0">
        <div className="flex justify-center">
          <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
        </div>
        <h1 className="text-4xl font-bold text-center py-4 text-primary">
          Our Expert TEAM
        </h1>
        <div className="flex justify-center">
          <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
        </div>
      </div>
      <div className="relative mx-auto lg:w-1/2 justify-center mt-12 grid grid-cols-1 lg:grid-cols-2  gap-10">
        <MoveBorderColor
          borderRadius="1.75rem"
        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        style={{
          //   add these two
          //   you can generate the color from here https://cssgradient.io/
          background: "linear-gradient(-180deg, #112829 0%, #173948 100%)",
          backgroundColor:
            "linear-gradient(-180deg, #112829 0%, #173948 100%)",
          // add this border radius to make it more rounded so that the moving border is more realistic
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        // remove bg-white dark:bg-slate-900
        //   random duration will be fun , I think , may be not
        duration={Math.floor(Math.random() * 10000) + 10000}
        >
          <div className=" flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <img
              alt={"/exp1.svg"}
              className="lg:w-32 md:w-20 w-16"
              src={"/exp1.svg"}
            />
            <div className="lg:ms-5">
              <h1 className="text-start text-xl md:text-2xl font-bold">
                Frontend Engineer Intern
              </h1>
              <p className="text-start text-white-100 mt-3 font-semibold">
                Frontend Engineer Intern
              </p>
            </div>
          </div>
        </MoveBorderColor>
      </div>
      <div className="w-full mt-12 grid grid-cols-1 lg:grid-cols-4  gap-10">
        {workExperience.map((card) => (
          <MoveBorderColor
            borderRadius="1.75rem"
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "linear-gradient(-180deg, #112829 0%, #173948 100%)",
              backgroundColor:
                "linear-gradient(-180deg, #112829 0%, #173948 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
                src={card.thumbnail}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </MoveBorderColor>
        ))}
      </div>
    </div>
  );
};

export default ModernExperience;
