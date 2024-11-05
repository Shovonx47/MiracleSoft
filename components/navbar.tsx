"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
 

import logo from "../assets/logo/Miracle.png"
import Image from "next/image";

const Navbar = () => {
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleServiceClick = () => {
    setIsServiceMenuOpen((prev) => !prev);
  };

  return (
    <NextUINavbar
      className={clsx(
        "lg:px-4 mx-0",

        pathName !== "/" || isScrolled
          ? "fixed top-0 z-50 translate-y-0 bg-white transition duration-700 ease-in-out"
          : "bg-transparent text-white shadow-none rounded-none border-none",
      )}
      maxWidth="2xl"
      position="static"
    >
      <NavbarContent>
        <NextLink className="flex justify-start items-center gap-1" href="/">
          <Image src={logo} width={100} height={100} className="" alt="miraclesoft"/>
        </NextLink>
      </NavbarContent>

      <NavbarContent className="basis-full" justify="end">
        <ul className="hidden lg:flex gap-14">
          {siteConfig.navItems.map((item) => {
            const isActiveSubmenu = item.submenu?.some(
              (submenuItem) => pathName === submenuItem.href,
            );

            return (
              <NavbarItem key={item.href} className="relative group">
                {item.submenu ? (
                  <>
                    <span
                      className={clsx(
                        "cursor-pointer data-[active=true]:text-primary",
                        "group-hover:text-primary font-semibold",
                        (pathName === item.href || isActiveSubmenu) &&
                          "text-primary",
                        isScrolled ? "text-primary" : "",
                      )}
                    >
                      {item.label}
                    </span>
                    <div className="relative group">
                      <div className={"arrow-up"}>
                        <div className="absolute left-0 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-700 ease-in-out mt-[12px] py-3">
                          {item.submenu &&
                            item.submenu.map((submenuItem) => (
                              <NextLink
                                key={submenuItem.href}
                                className={clsx(
                                  "block px-4 py-2 hover:bg-gray-100 rounded-md hover:text-primary",
                                  pathName === submenuItem.href &&
                                    "text-primary",
                                  isScrolled
                                    ? "text-primary"
                                    : "text-primary",
                                )}
                                href={submenuItem.href}
                              >
                                {submenuItem.label}
                              </NextLink>
                            ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <NextLink
                    className={clsx(
                      "data-[active=true]:text-primary",
                      "group-hover:text-primary font-semibold",
                      pathName === item.href && "text-primary",
                      isScrolled ? "text-primary" : " ",
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                )}
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 flex flex-col gap-2 mt-14 text-primary">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              {item.label === "Services" ? (
                <>
                  <span
                    className="text-lg ml-4 cursor-pointer transition duration-500 ease-in-out text-primary"
                    role="button"
                    tabIndex={0} // Make it focusable
                    onClick={handleServiceClick}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleServiceClick();
                      }
                    }}
                  >
                    {item.label}
                  </span>

                  {isServiceMenuOpen && item.submenu && (
                    <div
                      className={clsx(
                        "ml-8 mt-2 overflow-hidden transition duration-500 ease-in-out text-primary",
                        isServiceMenuOpen
                          ? "max-h-96 transition duration-500 ease-in-out text-primary"
                          : "max-h-0 text-primary",
                      )}
                    >
                      {item.submenu.map((submenuItem) => (
                        <Link
                          key={submenuItem.href}
                          className={clsx(
                            "block px-2 py-1 hover:bg-gray-100 text-primary",
                            pathName === submenuItem.href && "text-primary", // Apply orange color when href matches
                          )}
                          href={submenuItem.href}
                          size="lg"
                        >
                          {submenuItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  className={clsx(
                    "block px-4 py-2 hover:bg-gray-100 text-primary", // Default black text
                    pathName === item.href && "text-primary", // Orange when active
                  )}
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;
