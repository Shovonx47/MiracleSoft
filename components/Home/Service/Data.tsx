import { AiFillDollarCircle } from "react-icons/ai";
import { MdSchool,MdLocalHospital } from "react-icons/md";
import { IoRestaurantSharp } from "react-icons/io5";

export const cards = [
  {
    title: "Account Management",
    description:
      "Morbi in velit ligula, eget vulputate ligula viverra, mi ae sollicitudin rhoncusante roin gravida nibh vel eget vulputate ligula viverra, mi ae",
    image:
      "https://atixscripts.info/demo/html/majestic/assets/images/service/service1.jpg",
    icon: (
      <AiFillDollarCircle className="h-14 w-14 text-white transition duration-700 ease-in-out group-hover:text-[#a10101]" />
    ),
  },

  {
    title: "Institute Management",
    description:
      "Morbi in velit ligula, eget vulputate ligula viverra, mi ae sollicitudin rhoncusante roin gravida nibh vel eget vulputate ligula viverra, mi ae",
    image:
      "https://atixscripts.info/demo/html/majestic/assets/images/service/service2.jpg",
    icon: (
      <MdSchool className="h-14 w-14 text-white transition duration-700 ease-in-out group-hover:text-[#a10101]" />
    ),
  },
  {
    title: "Hospital Management",
    description:
      "Morbi in velit ligula, eget vulputate ligula viverra, mi ae sollicitudin rhoncusante roin gravida nibh vel eget vulputate ligula viverra, mi ae",
    image:
      "https://atixscripts.info/demo/html/majestic/assets/images/service/service3.jpg",
    icon: (
      <MdLocalHospital className="h-14 w-14 text-white transition duration-700 ease-in-out group-hover:text-[#a10101]" />
    ),
  },
  {
    title: "Restaurant Management ",
    description:
      "Morbi in velit ligula, eget vulputate ligula viverra, mi ae sollicitudin rhoncusante roin gravida nibh vel eget vulputate ligula viverra, mi ae",
    image:
      "https://atixscripts.info/demo/html/majestic/assets/images/service/service4.jpg",
    icon: (
      <IoRestaurantSharp className="h-14 w-14 text-white transition duration-700 ease-in-out group-hover:text-[#a10101]" />
    ),
  },
];
