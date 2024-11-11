"use client";
import React from "react";
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { Image } from "@nextui-org/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className:
      "bg-[conic-gradient(from_-130deg_at_60%_40%,#853aa7,#773496,#6A2E85,#5D2874,#4F2264,#4F2264)]",
    thumbnail:
      "https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "bg-black h-10",
    className:
      "bg-[conic-gradient(from_40deg_at_40%_60%,#c288d3,#b07fc6,#9d6fb9,#895ead,#7650a1)]", // change to md:col-span-2
    thumbnail:
      "https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80g",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className:
      "bg-[conic-gradient(from_40deg_at_40%_60%,#81c45c,#72b555,#63a64e,#549746,#45883f)]", // change to md:col-span-2
    thumbnail:
      "https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className:
      "bg-[conic-gradient(from_40deg_at_40%_60%,#a10101,#8f0101,#7d0101,#6b0101,#5a0101)]",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaAxvsLN0nptiBT-TQ99jbbPRYqXn1nf6GRHgloxNgKA0jHTGdxIuPs8PhzLADDrL794&usqp=CAU",
  },
];

const AnotherOwner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    centerPadding: "60px",
  };

  return (
    <div className="py-20 w-full md:w-8/12 px-[10px] lg:px-0 lg:mx-auto dark:bg-[radial-gradient(circle_at_top,#5a7885_0%,transparent_30%,transparent_60%,transparent_90%,transparent_100%)] ">
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
      <div className="slider-container">
        <Slider {...settings} className="w-full ">
          {workExperience.map((card) => (
            <div
              key={card.id}
              className={`flex-1 text-white border-neutral-200 dark:border-slate-800 ${card.className}`}
            >
              <div className="flex lg:flex-row flex-col lg:items-center  gap-2 h-52 lg:h-96">
                <Image
                  alt={card.thumbnail}
                  className="lg:w-96 h-96"
                  radius="none"
                  src={card.thumbnail}
                />
                <div className="lg:ms-5 p-3 py-6 md:p-5 lg:p-10">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AnotherOwner;
