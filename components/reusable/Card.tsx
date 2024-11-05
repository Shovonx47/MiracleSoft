import { Card, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

 

import MagicButton from "./MagicButton";

interface CardDetails {
  image: string;
  title?: string;
  description?: string;
  buttonText?: string;
  bgColor?: string;
}

export default function ReusableCard({
  image,
  title,
  description,
  buttonText,
  bgColor,
}: CardDetails) {
  return (
    <Card
      className="relative border-none shadow-none rounded-none overflow-hidden group w-full h-96"
      style={{ backgroundColor: bgColor || "white" }}
    >
      <div className="relative z-10 px-14 py-10">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
         
        <p className="mt-2 text-sm text-gray-800">
          {description || "Available soon."}
        </p>
      </div>
      <Image
        alt={title || "Card Image"}
        className="absolute inset-0 w-full h-full object-cover transition  duration-700 ease-in-out opacity-0"
        layout="fill"
        objectFit="cover"
        src={image}
      />
      <div
        className="absolute inset-0 bg-cover bg-center transition  duration-700 ease-in-out opacity-0 group-hover:opacity-100"
        style={{ backgroundImage: `url(${image})` }}
      />
      <CardFooter className="justify-between border-none   absolute bottom-4 lg:left-10 z-10">
        {/* <button className="border border-[#F97316] rounded-none font-light text-[#F97316] bg-white hover:bg-[#F97316] hover:text-white transition duration-700 ease-in-out px-3 py-2 text-sm">
          {buttonText || "Explore"}
        </button> */}

        <MagicButton
          className="bg-[conic-gradient(from_90deg_at_50%_50%,#0E2732,#0F4A5A,#4A6B77,#2B5360)] hover:bg-[conic-gradient(from_-90deg_at_50%_50%,#2B5360,#4A6B77,#0F4A5A,#0E2732)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fd5602,#FF8D21,#FFB76B,#FFCD90)] dark:hover:bg-[conic-gradient(from_-90deg_at_50%_50%,#FFCD90,#FFB76B,#FF8D21,#fd5602)] text-white dark:text-primary transition duration-700 ease-in-out"
          icon={<FaLocationArrow />}
          otherClass="w-full h-10 md:w-24"
          position="right"
          title={buttonText || "Explore"}
        />
      </CardFooter>
    </Card>
  );
}
