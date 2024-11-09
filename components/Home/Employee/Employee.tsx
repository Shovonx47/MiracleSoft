"use client"
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
import "./Employee.css";
import Link from "next/link";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";

const serviceData = [
    {
        icon: <FaDigitalTachograph />,
        name: "Md. Omar Faruk",
        description:
            "Transform your business processes with cutting-edge digital technologies.",
        link: "/services/digital-transformation",
    },
    {
        icon: <FaCogs />,
        name: "Md. Omar Faruk",
        description:
            "Design, develop, and maintain robust products tailored to your needs.",
        link: "/services/product-engineering",
    },
    {
        icon: <FaLightbulb />,
        name: "Md. Omar Faruk",
        description:
            "Innovate with digital solutions to stay ahead in the competitive market.",
        link: "/services/digital-innovation",
    },
    {
        icon: <FaHandsHelping />,
        name: "Md. Omar Faruk",
        description:
            "Comprehensive management of your IT infrastructure and services.",
        link: "/services/managed-services",
    },
    {
        icon: <FaUsers />,
        name: "Md. Omar Faruk",
        description:
            "Scale your team with skilled professionals to meet project demands.",
        link: "/services/team-augmentation",
    },
    {
        icon: <FaProjectDiagram />,
        name: "Md. Omar Faruk",
        description:
            "Streamline business operations with tailored Enterprise Resource Planning solutions.",
        link: "/services/erp",
    },





];



const fadeIn = (direction: any, type: any, delay: any, duration: any) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};


const Employee = () => {
    return (
        <div className="sectionMargin lg:w-11/12 mx-auto mt-28">
            <div className="servicesWraps">
                <div>
                    <div className="block lg:flex justify-between">
                        <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-y-5 lg:w-9/12">
                            {serviceData?.map((card, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                                    className="cards w-[90%] lg:w-[95%] h-56 md:h-56"
                                >
                                    <div className="inner-box">
                                        <div className="cards-front cards-front5">
                                            <Card isFooterBlurred className="border-none w-full">
                                                <div className="relative w-full">
                                                    <Image
                                                        alt="Woman listening to music"
                                                        className="w-screen h-full"
                                                        height={300}
                                                        src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"

                                                    />

                                                    {/* Overlay applied only on image */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg z-10" />

                                                </div>
                                                <CardFooter className="justify-center overflow-hidden py-1 absolute bottom-0 shadow-small z-20">
                                                    <p className="text-white font-bold text-xl">{card.name}</p>
                                                </CardFooter>
                                            </Card>
                                        </div>

                                        <div className="cards-back text-white relative h-56">
                                            <div className="cards-back-content text-center">
                                                <Card className="border-none w-full">
                                                    <CardHeader className="absolute top-[50%] flex-col !items-start z-50">
                                                        <p className="text-primary uppercase font-bold z-50">What to watch</p>
                                                        <h4 className="text-white font-medium text-large z-50">Stream the Acme event</h4>
                                                    </CardHeader>

                                                    <div className="relative w-full h-full">
                                                        <Image
                                                            alt=""
                                                            className="w-screen h-full"
                                                            height={220}

                                                            src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
                                                        />
                                                        {/* Overlay applied only on image */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg z-10 w-full" />

                                                    </div>

                                                    <CardFooter className="justify-center absolute shadow-sm bottom-0 z-50 text-white">
                                                        <Link
                                                            className="flex items-center justify-center mt-3 border text-xs font-bold py-1 w-full"
                                                            href={card.link}
                                                        >
                                                            <span>READ MORE</span>
                                                            <small>
                                                                <FaArrowRight className="h-3 w-4 mt-[1px]" />
                                                            </small>
                                                        </Link>
                                                    </CardFooter>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>

                                </motion.div>
                            ))}
                        </div>



                        <div className="lg:w-3/12 text-primary text-4xl font-bold h- full flex justify-center items-center">
                          <div>
                          <div className="flex justify-center">
                                <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
                            </div>
                            <h1 className="text-5xl font-bold text-center text-primary py-4">Employee</h1>
                            <div className="flex justify-center">
                                <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;
