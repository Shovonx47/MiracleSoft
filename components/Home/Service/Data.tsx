import { FaCamera, FaHeart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

export const cards = [
  {
    title: "Film editing",
    description:
      "Morbi in velit ligula, eget vulputate ligula viverra, mi ae sollicitudin rhoncusante roin gravida nibh vel eget vulputate ligula viverra, mi ae",
    image:
      "https://atixscripts.info/demo/html/majestic/assets/images/service/service1.jpg",
    icon: (
      <FaHeart className="h-14 w-14 text-white transition duration-700 ease-in-out group-hover:text-[#E74C3C]" />
    ),
  },

  {
    title: "Web design",
    description:
      "Morbi in velit ligula, eget vulputate ligula viverra, mi ae sollicitudin rhoncusante roin gravida nibh vel eget vulputate ligula viverra, mi ae",
    image:
      "https://atixscripts.info/demo/html/majestic/assets/images/service/service2.jpg",
    icon: (
      <FaCamera className="h-14 w-14 text-white transition duration-700 ease-in-out group-hover:text-[#E74C3C]" />
    ),
  },
  {
    title: "Web development",
    description:
      "Morbi in velit ligula, eget vulputate ligula viverra, mi ae sollicitudin rhoncusante roin gravida nibh vel eget vulputate ligula viverra, mi ae",
    image:
      "https://atixscripts.info/demo/html/majestic/assets/images/service/service3.jpg",
    icon: (
      <IoSettingsSharp className="h-14 w-14 text-white transition duration-700 ease-in-out group-hover:text-[#E74C3C]" />
    ),
  },
  {
    title: "Photography",
    description:
      "Morbi in velit ligula, eget vulputate ligula viverra, mi ae sollicitudin rhoncusante roin gravida nibh vel eget vulputate ligula viverra, mi ae",
    image:
      "https://atixscripts.info/demo/html/majestic/assets/images/service/service4.jpg",
    icon: (
      <FaCamera className="h-14 w-14 text-white transition duration-700 ease-in-out group-hover:text-[#E74C3C]" />
    ),
  },
];
