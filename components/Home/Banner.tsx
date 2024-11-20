"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface ImageText {
  image: string;
  text: ReactNode;
  buttonLabel: string;
  buttonLink: string;
}

const imageTextArray: ImageText[] = [
  {
    image: "https://cdn.get.tech/images/showcase/1x-tech.png",
    text: (
      <>
        Innovating your digital journey with{" "}
        <span className="text-primary hover:text-white">
          tailored solutions
        </span>
        .
      </>
    ),
    buttonLabel: "Get Started",
    buttonLink: "/get-started", // Link for the button
  },
  {
    image:
      "https://cdn.create.vista.com/api/media/small/267998426/stock-photo-selective-focus-young-woman-virtual-reality-headset-pointing-finger-glowing",
    text: (
      <>
        Transforming your vision into a{" "}
        <span className="text-primary hover:text-white">
          digital masterpiece
        </span>{" "}
        through technology.
      </>
    ),
    buttonLabel: "Learn More",
    buttonLink: "/learn-more",
  },
  {
    image:
      "https://papers.co/wallpaper/papers.co-mp33-macbook-air-bokeh-art-apple-dark-bw-29-wallpaper.jpg",
    text: (
      <>
        Crafting IT solutions that drive{" "}
        <span className="text-primary hover:text-white">success</span> at every
        step.
      </>
    ),
    buttonLabel: "Explore Solutions",
    buttonLink: "/explore-solutions",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/strategic-planning-analysis-business-project-600nw-2434224813.jpg",
    text: (
      <>
        Ensure seamless integration of technology with{" "}
        <span className="text-primary hover:text-white">creative partners</span>
        .
      </>
    ),
    buttonLabel: "Partner With Us",
    buttonLink: "/partner-with-us",
  },
  {
    image:
      "https://media.istockphoto.com/id/1440777561/photo/above-view-of-young-coworkers-using-mobile-gadgets-during-individual-work.jpg?s=612x612&w=0&k=20&c=ntFaxmq4C7g9gIyEAAWnaS5YL3meOJtpopPXZjR4Nh0=",
    text: (
      <>
        Where technology creates a{" "}
        <span className="text-primary hover:text-white">digital world</span>{" "}
        that works for you.
      </>
    ),
    buttonLabel: "Contact Us",
    buttonLink: "/contact-us",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imageTextArray.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Get the next slide numbers and next image/text
  const nextIndex = (index + 1) % imageTextArray.length;
  const currentSlide = index + 1; // Convert to 1-based index
  const nextSlide = nextIndex + 1; // Next slide, wrapping around

  return (
    <div className="relative flex flex-col items-center justify-center w-full mt-16">
      {/* Image */}
      <div className="relative w-full h-[450px] md:h-[680px] overflow-hidden">
        {/* Current Image */}
        <motion.img
          key={imageTextArray[index].image}
          alt="Current Image"
          animate={{ opacity: 1, filter: "blur(10px)" }}
          className="absolute w-full h-full object-cover"
          exit={{ opacity: 0, filter: "blur(10px)" }}
          initial={{ opacity: 1, filter: "blur(10px)" }}
          src={imageTextArray[index].image}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        {/* Next Image (Crossfade) */}
        <motion.img
          key={imageTextArray[nextIndex].image} // Key for next image
          alt="Next Image"
          animate={{ opacity: 1, filter: "blur(0px)" }} // Fade in and sharpen
          className="absolute w-full h-full object-cover"
          exit={{ opacity: 0, filter: "blur(10px)" }} // Fade out and blur when not active
          initial={{ opacity: 0, filter: "blur(10px)" }} // Start invisible and blurred
          src={imageTextArray[nextIndex].image}
          transition={{ duration: 2.5, ease: "easeInOut" }} // Increased transition duration
        />

        {/* Overlay */}
        <div className="h-full w-full bg-black absolute top-0 bg-opacity-40 z-0" />

        {/* Text (Now linked to the next image) */}
        <div className="absolute inset-0 h-full flex items-center justify-center text-white z-10">
          <div>
            <motion.p
              key={index}
              animate={{ opacity: 1, y: 0 }} // Move into the center
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white   w-10/12 lg:w-7/12 mx-auto leading-tight text-center"
              exit={{ opacity: 0, y: -50 }} // Move up and out
              initial={{ opacity: 0, y: 50 }} // Start below the center
              transition={{ duration: 2.5, ease: "easeInOut" }}
            >
              {imageTextArray[nextIndex].text}
            </motion.p>

            {/* Button */}
            <motion.div
              key={`${index}-button`}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 md:mt-8 flex justify-center items-center"
              exit={{ opacity: 0, y: -50 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            >
              <Link href={imageTextArray[nextIndex].buttonLink}>
                <button className="border-2 border-white text-white px-7 py-3 hover:bg-white hover:text-gray-800 transition duration-700 ease-in-out">
                  {imageTextArray[nextIndex].buttonLabel}
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Number Indicators */}
      {/* <div className="absolute bottom-1/2 flex justify-between w-full">
        <div className="flex items-center">
          <div className="bg-primary text-white rounded rounded-l-none px-2 md:px-5 py-2 mr-2">
            {currentSlide}
          </div>
          <hr className="flex-1 border-t border-white" />
        </div>
        <div className="flex items-center">
          <hr className="flex-1 border-t border-white" />
          <div className="bg-primary text-white rounded rounded-r-none px-2 md:px-5 py-2 ml-2">
            {nextSlide}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
