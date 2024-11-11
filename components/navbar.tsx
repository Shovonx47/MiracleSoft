"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import logo from "../assets/logo/Miracle.png";

import { ThemeSwitch } from "./theme-switch";

import { siteConfig } from "@/config/site";
import { useAppSelector } from "@/redux/hooks";

type AnimatedUnderlineProps = {
  active?: boolean;
};

const Navbar: React.FC = () => {
  const pathName = usePathname();

  const [itemName, setItemName] = useState("");
  const isScrolled = useAppSelector((state) => state.scroll.isScrolled);

  // useEffect(() => {
  //   if (pathName === "/" || pathName === "") {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [pathName]);

  useEffect(() => {
    // If on the homepage or no hash is present, set the active item to the home item
    if (pathName === "/" || pathName === "") {
      setItemName(siteConfig.navItems[0].href); // Assuming the first item in navItems is Home
    } else {
      // Set the active item based on the current section hash
      const currentItem = pathName.split("#")[1] || ""; // Get the section name from the URL hash

      setItemName(`#${currentItem}`); // Set item name with hash (#contact, #about, etc.)
    }
  }, [pathName]);

  // New AnimatedUnderline component using ::after pseudo-element
  const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({ active }) => (
    <div className={clsx("relative w-5 mx-auto mb-1 mt-[5px]")}>
      <span
        className={clsx(
          "absolute bottom-0 left-0 right-0 mx-auto h-[2.3px] w-full transform transition-all duration-700 ease-in-out",
          active
            ? `scale-x-100 ${isScrolled ? "bg-gray-800 dark:bg-white" : "bg-white"}`
            : `scale-x-0 ${isScrolled ? "bg-gray-800" : "bg-white"} dark:bg-white`,
          "group-hover:scale-x-100",
        )}
      />
    </div>
  );

  return (
    <NextUINavbar
      className={clsx(
        "lg:px-4 mx-0",
        isScrolled
          ? `fixed top-0 z-50 translate-y-0 bg-white dark:bg-[linear-gradient(-160deg,_#09161c,_#173948)] dark:bg-opacity-25 transition duration-700 ease-in-out`
          : "bg-transparent",
      )}
      maxWidth="2xl"
      position="static"
    >
      <NavbarContent>
        <NextLink className="z-50 w-24" href="/">
          <Image
            alt="miraclesoft"
            className="z-50"
            height={100}
            src={logo}
            width={100}
          />
        </NextLink>
      </NavbarContent>

      <NavbarContent className="basis-full" justify="center">
        <ul className="hidden lg:flex gap-14">
          {siteConfig.navItems.map((item) => {
            return (
              <NavbarItem key={item.href} className="relative group">
                <div>
                  <AnimatedUnderline active={item.href === itemName} />
                  <NextLink
                    passHref
                    scroll
                    className={clsx(
                      "data-[active=true]: font-semibold transition-transform duration-300 ease-in-out transform",
                      item.href === itemName ? "scale-105 " : "",
                      isScrolled ? "text-gray-800 dark:text-white" : " ",
                    )}
                    href={item.href}
                    onClick={() => setItemName(item.href)}
                  >
                    {item.label}
                  </NextLink>
                  <AnimatedUnderline active={item.href === itemName} />
                </div>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 flex flex-col gap-2 mt-14">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              {
                <NextLink
                  passHref
                  scroll
                  className={clsx(
                    "block px-4 py-2 text-gray-800 dark:text-white",
                    item.href === itemName && "text-primary dark:text-primary",
                  )}
                  href={item.href}
                  onClick={() => setItemName(item.href)}
                >
                  {item.label}
                </NextLink>
              }
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>

      <ThemeSwitch isScrolled={isScrolled} />
    </NextUINavbar>
  );
};

export default Navbar;
