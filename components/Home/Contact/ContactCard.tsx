"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, domAnimation, LazyMotion } from "framer-motion";

import FormPage from "./FormPage";

const ContactCard = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      className={`relative lg:w-11/12 mx-auto mt-20 lg:mt-20  lg:pt-5 lg:my-20 ${showForm ? "h-[600px] lg:h-[555px]" : "h-[300px] lg:h-[570px]"}`}
    >
      <div
        className={`flex justify-center items-center  max-w-7xl mx-auto bg-[#a10101] ${showForm ? "h-[650px] lg:h-[650px]" : "h-[308px] lg:h-[650px]"}`}
      >
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="popLayout">
            {showForm ? (
              <motion.div
                key="form"
                animate={{ y: 0, opacity: 1 }} // Animate to center
                className="relative w-full  flex justify-center items-center"
                exit={{ y: "100%", opacity: 0 }} // Exit to bottom
                initial={{ y: "100%", opacity: 0 }} // Start from bottom
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <FormPage closeForm={() => setShowForm(false)} />
              </motion.div>
            ) : (
              <motion.div
                key="main-content"
                animate={{ y: 0, opacity: 1 }} // Animate to center
                className="relative w-full max-w-5xl mt-20 h-[200px] lg:h-[450px] flex justify-center items-center"
                exit={{ y: "-100%", opacity: 0 }} // Exit to top
                initial={{ y: "100%", opacity: 0 }} // Start from top
                transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth easing and slight delay
              >
                {/* Start a Project box */}
                <div className="absolute left-0 -top-16 z-50 w-1/2 mx-auto h-full text-primary bg-white flex flex-col justify-center items-center space-y-2 shadow-lg cursor-pointer">
                  <h2 className="text-xl lg:text-4xl font-extrabold text-center px-8 leading-tight">
                    START A PROJECT
                  </h2>
                  <span className="border-b-4 w-8 lg:w-12 border-primary flex justify-end ml-16 lg:ml-[17rem]" />
                  <p className="text-xl lg:text-4xl font-extrabold text-right lg:-mr-[13rem] leading-tight">
                    let’s go
                  </p>
                </div>

                {/* Send a Message box */}
                <div
                  className="absolute bottom-4 lg:bottom-0 right-0 lg:right-16 w-1/2 h-full bg-primary text-white flex flex-col justify-center items-center space-y-2 p-8 shadow-lg z-20 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => setShowForm(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setShowForm(true);
                  }}
                >
                  <h2 className="text-xl lg:text-4xl font-extrabold text-center px-8 leading-tight">
                    SEND A MESSAGE
                  </h2>
                  <span className="border-b-4 w-8 lg:w-12 border-white flex justify-start mr-[3.5rem] lg:mr-[17rem]" />
                  <p className="text-xl lg:text-4xl font-extrabold text-right  lg:-ml-[13rem]">
                    tell us
                  </p>
                </div>

                {/* Outline boxes */}
                <div className="absolute inset-0 w-5/12 md:w-[45.8%] lg:w-1/2 border-4 lg:border-8 border-white z-0 border-r-0 translate-x-8 lg:-translate-x-8 -translate-y-12 lg:-translate-y-4" />
                <div className="absolute inset-0 border-4 lg:border-8 border-primary translate-x-[120%] md:translate-x-[95%] lg:translate-x-[95%] border-l-0  w-5/12 md:w-[50%] lg:w-1/2 right-0 -translate-y-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </LazyMotion>
      </div>

      <div className="absolute inset-0 border-8 border-b-0 border-[#a10101] translate-x-0 right-0 translate-y-24 -z-10 hidden lg:flex" />
    </div>
  );
};

export default ContactCard;