import { Image } from "@nextui-org/image";
import React from "react";

const images = [
  "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
  "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
  "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
  "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
  "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
  "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg",
];

const Profile = () => {
  return (
    <section className="flex flex-wrap  my-20">
      {/* Left section with text */}
      <div className="lg:w-4/12 text-primary text-4xl font-bold h-[500px] flex justify-end items-center pr-10">
        <div>
          <div className="flex justify-center">
            <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
          </div>
          <h1 className="text-5xl font-bold text-center text-primary py-4">
            Profile
          </h1>
          <div className="flex justify-center">
            <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
          </div>
        </div>
      </div>

      {/* Right section with images and hover effects */}
      <div className="w-full sm:w-8/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-0">
        {images.map((src, index) => (
          <div key={index} className="relative group overflow-hidden">
            <Image
              alt={`Image ${index + 1}`}
              className="w-screen min-h-[250px] object-cover rounded-none transition-all duration-700 ease-in-out cursor-pointer"
              src={src}
            />

            {/* Red border with rotation animation */}
            <span
              className="
                    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    h-[180px] w-64
                    scale-x-0 group-hover:scale-x-100
                    border-4 border-red-500 transition-all duration-700 ease-in-out
                    origin-center z-40 shadow-lg
                    group-hover:rotate-[900deg]
                    group-hover:bg-red-200
                "
            />

            {/* White background overlay */}
            <span
              className="
                    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    h-full min:h-[220px] w-60
                    scale-x-0 group-hover:scale-x-100
                    bg-white transition-all duration-700 ease-in-out
                    origin-center z-50 opacity-90
                    flex items-center justify-center
                "
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Name from top to center */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 transform translate-y-[-70%] group-hover:translate-y-0 transition duration-700 ease-in-out">
                  Md. Omar Faruk
                </h3>

                {/* Designation from bottom to center */}
                <p className="text-sm sm:text-base text-gray-600 transform translate-y-[70%] group-hover:translate-y-0 transition duration-700 ease-in-out">
                  Web Developer
                </p>
              </div>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profile;
