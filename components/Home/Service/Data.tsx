import { AiFillDollarCircle } from "react-icons/ai";
import { MdSchool, MdLocalHospital } from "react-icons/md";
import { IoRestaurantSharp } from "react-icons/io5";

export const cards = [
  {
    title: "Account Management",
    description:
      "Take control of your finances with our powerful account management software. Easy to use, improve accuracy, save time, and reduce errors. Manage your finances effortlessly, stay organized, and enjoy seamless integration and real-time finance insights for better decision-making! Sign up for a free trial today!",
    image:
      "https://atixscripts.info/demo/html/majestic/assets/images/service/service1.jpg",
    icon: (
      <AiFillDollarCircle className="h-14 w-14 text-white transition duration-700 ease-in-out group-hover:text-[#a10101]" />
    ),
  },

  {
    title: "Institute Management",
    description:
      "Our user-friendly institute management software will revolutionize your institute's operations. Where you can manage daily tasks, track the progress of students, reduce stress, and focus on what matters most to simplify administration and boost productivity effortlessly!",
    image:
      "https://atixscripts.info/demo/html/majestic/assets/images/service/service2.jpg",
    icon: (
      <MdSchool className="h-14 w-14 text-white transition duration-700 ease-in-out group-hover:text-[#a10101]" />
    ),
  },
  {
    title: "Hospital Management",
    description:
      "Manage hospitals effectively with our comprehensive solution to hospital management. Improve hospital operations, strategic planning, financial management, staff productivity, care quality, and much more to stay competitive in the healthcare industry.",
    image:
      "https://atixscripts.info/demo/html/majestic/assets/images/service/service3.jpg",
    icon: (
      <MdLocalHospital className="h-14 w-14 text-white transition duration-700 ease-in-out group-hover:text-[#a10101]" />
    ),
  },
  {
    title: "Restaurant Management ",
    description:
      "Discover powerful software designed for your restaurants. Manage orders, staff, and inventory effortlessly. Try it now for a smoother operation, increase profits, and provide exceptional service with ease!",
    image:
      "https://atixscripts.info/demo/html/majestic/assets/images/service/service4.jpg",
    icon: (
      <IoRestaurantSharp className="h-14 w-14 text-white transition duration-700 ease-in-out group-hover:text-[#a10101]" />
    ),
  },
];
