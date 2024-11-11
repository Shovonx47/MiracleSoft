"use client";
import {
  FaDigitalTachograph,
  FaCogs,
  FaLightbulb,
  FaHandsHelping,
  FaUsers,
  FaProjectDiagram,
  FaMobileAlt,
  FaChartLine,
  FaShoppingCart,
  FaTools,
  FaNetworkWired,
  FaArrowRight,
} from "react-icons/fa";
import "./Owners.css";
import Link from "next/link";
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
const serviceData = [
  {
    icon: <FaDigitalTachograph />,
    title: "Digital Transformation",
    description:
      "Transform your business processes with cutting-edge digital technologies.",
    link: "/services/digital-transformation",
  },
  {
    icon: <FaCogs />,
    title: "Product Engineering",
    description:
      "Design, develop, and maintain robust products tailored to your needs.",
    link: "/services/product-engineering",
  },
  {
    icon: <FaLightbulb />,
    title: "Digital Innovation",
    description:
      "Innovate with digital solutions to stay ahead in the competitive market.",
    link: "/services/digital-innovation",
  },
  {
    icon: <FaHandsHelping />,
    title: "Managed Services",
    description:
      "Comprehensive management of your IT infrastructure and services.",
    link: "/services/managed-services",
  },
  {
    icon: <FaUsers />,
    title: "Team Augmentation",
    description:
      "Scale your team with skilled professionals to meet project demands.",
    link: "/services/team-augmentation",
  },
  {
    icon: <FaProjectDiagram />,
    title: "ERP",
    description:
      "Streamline business operations with tailored Enterprise Resource Planning solutions.",
    link: "/services/erp",
  },
  {
    icon: <FaMobileAlt />,
    title: "CRM Solutions",
    description:
      "Enhance customer relationships and manage interactions effectively.",
    link: "/services/crm-solutions",
  },
  {
    icon: <FaChartLine />,
    title: "Enterprise Mobility",
    description:
      "Empower your workforce with mobile solutions for better productivity.",
    link: "/services/enterprise-mobility",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    description:
      "Develop seamless eCommerce platforms to grow your online business.",
    link: "/services/ecommerce",
  },
  {
    icon: <FaTools />,
    title: "ITSM & ITOM",
    description:
      "Optimize IT services and operations with best-in-class solutions.",
    link: "/services/itsm-itom",
  },
  {
    icon: <FaNetworkWired />,
    title: "IOT (Internet of Things)",
    description:
      "Connect and manage IoT devices to revolutionize business processes.",
    link: "/services/iot",
  },
];

const Owners = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "50px",
          infinite: true,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 4000,
          centerPadding: "50px",
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 4000,
          centerPadding: "50px",
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="sectionMargin lg:w-11/12 mx-auto my-28">
      <div className="servicesWraps">
        <div className="">
          <div>
            <Slider {...settings}>
              {serviceData?.map((card, index) => (
                <div
                  key={index}
                  className="cards w-[90%] lg:w-[95%] h-56 md:h-52"
                >
                  <div className="inner-box">
                    <div className="cards-front cards-front5">
                      <div className="text-4xl lg:text-[55px] text-gray-800">
                        {card.icon}
                      </div>
                      <p className="mt-3 font-bold text-xl text-gray-800">
                        {card.title}
                      </p>
                    </div>
                    <div className="cards-back text-white">
                      <div className="cards-back-content md:px-3 text-center">
                        <b className="block text-xl">{card.title}</b>
                        <p className="py-1 md:py-4">{card?.description}</p>
                        <div className="mx-2 md:mx-0">
                          <Link
                            className="flex items-center justify-center mt-3 border text-xs font-bold py-1"
                            href={card.link}
                          >
                            <span>READ MORE </span>
                            <small>
                              <FaArrowRight className="h-3 w-4 mt-[1px]" />
                            </small>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owners;
