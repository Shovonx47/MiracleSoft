import { Image } from "@nextui-org/image";
import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const profileData = [
  {
    image: "https://res.cloudinary.com/div4esbm1/image/upload/v1738055373/premium_vector-1725984427567-a4f3c4483449.png",
    name: "Lutfun Nahar Nisha",
    designation: "UI/UX Designer",
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    image: "https://res.cloudinary.com/div4esbm1/image/upload/v1738054615/Edited_Picture.png",
    name: "Shekh Rasel Masrur Ahmmad",
    designation: "Web Developer",
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    image: "https://res.cloudinary.com/div4esbm1/image/upload/v1738054448/ijnu8ngzpn1ejab8fali.jpg",
    name: "Md. Omar Faruk",
    designation: "Web Developer",
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    image: "https://res.cloudinary.com/div4esbm1/image/upload/v1738054723/1718886102938.jpg",
    name: "Saiful Islam Shovon",
    designation: "Software Engineer",
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  // {
  //   image: "https://res.cloudinary.com/div4esbm1/image/upload/v1738054448/ijnu8ngzpn1ejab8fali.jpg",
  //   name: "Charlie Green",
  //   designation: "Marketing Specialist",
  //   socials: {
  //     facebook: "https://facebook.com",
  //     linkedin: "https://linkedin.com",
  //   },
  // },
  // {
  //   image: "https://res.cloudinary.com/div4esbm1/image/upload/v1738054615/Edited_Picture.png",
  //   name: "David Lee",
  //   designation: "Business Analyst",
  //   socials: {
  //     facebook: "https://facebook.com",
  //     linkedin: "https://linkedin.com",
  //   },
  // },
];

const Profile = () => {
  return (
    <section className="lg:flex lg:flex-wrap mb-5 pt-20 " id="profile">
      {/* Left section with text */}
      <div className="w-full lg:w-4/12 text-primary text-4xl font-bold lg:h-[500px] flex justify-center lg:justify-end items-center pr-10 mb-24 lg:mb-0">
        <div>
          <div className="flex justify-center lg:justify-end">
            <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
          </div>
          <h1 className="text-5xl font-bold text-center text-primary py-4">
            Profile
          </h1>
          <div className="flex justify-center lg:justify-end">
            <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
          </div>
        </div>
      </div>

      {/* Right section with images and hover effects */}
      <div className="w-full lg:w-8/12 grid grid-cols-2 md:grid-cols-3  gap-0">
        {profileData.map((profile, index) => (
          <div key={index} className="relative group overflow-hidden">
            <Image
              alt={`Image ${index + 1}`}
              className={`w-screen min-h-[250px] max-h-[350px] rounded-none transition-all duration-700 ease-in-out cursor-pointer ${
                profile.image.includes('1718886102938') ? 'object-cover object-[center_20%]' : 'object-cover'
              }`}
              src={profile.image}
            />

            {/* Red border with rotation animation */}
            <span
              className="
                    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    h-[180px] w-[265px]
                    scale-x-0 group-hover:scale-x-100
                    border-4 border-primary transition-all duration-700 ease-in-out
                    origin-center z-40 shadow-lg
                    group-hover:rotate-[900deg]
                    group-hover:bg-primary/10
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
              <div>
                <div className="flex flex-col items-center transform translate-y-[-70%] group-hover:translate-y-0 transition duration-700 ease-in-out">
                  {/* Name from top to center */}
                  <h3 className="md:text-2xl text-xl font-bold text-primary text-center">
                    {profile.name}
                  </h3>

                  {/* Designation from bottom to center */}
                  <p className="text-sm text-gray-600">{profile.designation}</p>
                </div>
                <div className="flex justify-center mt-4 transform translate-y-[70%] group-hover:translate-y-0 transition duration-700 ease-in-out">
                  <FaFacebookF className="text-primary border p-[11px] h-10 w-10 cursor-pointer hover:text-white hover:bg-primary hover:border-none" />
                  <FaLinkedin className="text-primary border p-[11px] h-10 w-10 cursor-pointer hover:text-white hover:bg-primary hover:border-none" />
                  <FaTwitter className="text-primary border p-[11px] h-10 w-10 cursor-pointer hover:text-white hover:bg-primary hover:border-none" />
                </div>
              </div>
            </span>
          </div>
        ))}
      </div>
    </section>  
  );
};

export default Profile;
