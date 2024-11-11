// "use client";
// import {
//   Navbar as NextUINavbar,
//   NavbarContent,
//   NavbarMenu,
//   NavbarMenuToggle,
//   NavbarItem,
//   NavbarMenuItem,
// } from "@nextui-org/navbar";
// import { Link } from "@nextui-org/link";
// import NextLink from "next/link";
// import clsx from "clsx";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import { siteConfig } from "@/config/site";

// import logo from "../assets/logo/Miracle.png";
// import Image from "next/image";
// import { useAppSelector } from "@/redux/hooks";
// import { ThemeSwitch } from "./theme-switch";

// type AnimatedUnderlineProps = {
//   active?: boolean;
// };

// const Navbar: React.FC = () => {
//   const pathName = usePathname();
//   const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
//   const isScrolled = useAppSelector((state) => state.scroll.isScrolled);

//   const handleServiceClick = () => {
//     setIsServiceMenuOpen((prev) => !prev);
//   };

//   // New AnimatedUnderline component using ::after pseudo-element
//   const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({ active }) => (
//     <div
//       className={clsx(
//         "relative w-5 mx-auto mb-1 mt-[5px]",

//       )}
//     >
//       <span
//         className={clsx(
//           "absolute bottom-0 left-0 right-0 mx-auto h-[2.3px] w-full transform transition-all duration-700 ease-in-out",
//           active ? `scale-x-100 ${isScrolled ? "bg-gray-800 dark:bg-white" : "bg-white"}` : `scale-x-0 ${isScrolled ? "bg-gray-800" : "bg-white"} dark:bg-white`,
//           "group-hover:scale-x-100"
//         )}
//       ></span>
//     </div>
//   );

//   return (
//     <NextUINavbar
//       className={clsx(
//         "lg:px-4 mx-0",
//         isScrolled
//           ? `fixed top-0 z-50 translate-y-0 bg-white dark:bg-[linear-gradient(-160deg,_#09161c,_#173948)] dark:bg-opacity-25 transition duration-700 ease-in-out`
//           : "bg-transparent"
//       )}
//       maxWidth="2xl"
//       position="static"
//     >
//       <NavbarContent>
//         <NextLink className="z-50 w-24" href="/">
//           <Image src={logo} width={100} height={100} className="z-50" alt="miraclesoft" />
//         </NextLink>
//       </NavbarContent>

//       <NavbarContent className="basis-full" justify="center">
//         <ul className="hidden lg:flex gap-14">
//           {siteConfig.navItems.map((item) => {
//             const isActiveSubmenu = item.submenu?.some(
//               (submenuItem) => pathName === submenuItem.href
//             );

//             return (
//               <NavbarItem key={item.href} className="relative group">
//                 {item.submenu ? (
//                   <>
//                     <AnimatedUnderline active={pathName === item.href || isActiveSubmenu} />
//                     <span
//                       className={clsx(
//                         "cursor-pointer font-semibold transition-transform duration-300 ease-in-out transform",
//                         pathName === item.href || isActiveSubmenu
//                           ? "scale-105"
//                           : "",
//                         isScrolled ? "text-gray-800 dark:text-white" : "text-white"
//                       )}
//                     >
//                       {item.label}
//                     </span>
//                     <AnimatedUnderline active={pathName === item.href || isActiveSubmenu} />
//                     <div className="relative group">
//                       <div className="arrow-up">
//                         <div className="absolute left-0 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-700 ease-in-out mt-[12px] py-3">
//                           {item.submenu &&
//                             item.submenu.map((submenuItem) => (
//                               <NextLink
//                                 key={submenuItem.href}
//                                 className={clsx(
//                                   "block px-4 py-2 hover:bg-gray-100 rounded-md text-gray-800 hover:text-primary",

//                                 )}
//                                 href={`${submenuItem.href}`}
//                               >
//                                 {submenuItem.label}
//                               </NextLink>
//                             ))}
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <div>
//                     <AnimatedUnderline active={pathName === item.href} />
//                     <NextLink
//                       className={clsx(
//                         "data-[active=true]: font-semibold transition-transform duration-300 ease-in-out transform",
//                         pathName === item.href ? "scale-105 " : "",
//                         isScrolled ? "text-gray-800 dark:text-white" : " "
//                       )}
//                       href={item.href}
//
//                     >
//                       {item.label}
//                     </NextLink>
//                     <AnimatedUnderline active={pathName === item.href} />
//                   </div>
//                 )}
//               </NavbarItem>
//             );
//           })}
//         </ul>
//       </NavbarContent>

//       <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarMenu>
//         <div className="mx-4 flex flex-col gap-2 mt-14">
//           {siteConfig.navMenuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item.label}-${index}`}>
//               {item.label === "Services" ? (
//                 <>
//                   <span
//                     className={clsx(
//                       "text-lg ml-4 cursor-pointer transition duration-500 ease-in-out",
//                       pathName === item.href || isServiceMenuOpen
//                         ? "text-primary dark:text-primary"
//                         : "text-gray-800 dark:text-white"
//                     )}
//                     role="button"
//                     tabIndex={0}
//                     onClick={handleServiceClick}
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter" || e.key === " ") {
//                         handleServiceClick();
//                       }
//                     }}
//                   >
//                     {item.label}
//                   </span>

//                   {isServiceMenuOpen && item.submenu && (
//                     <div
//                       className={clsx(
//                         "ml-8 mt-2 overflow-hidden transition duration-500 ease-in-out",
//                         isServiceMenuOpen ? "max-h-96" : "max-h-0"
//                       )}
//                     >
//                       {item.submenu.map((submenuItem) => (
//                         <Link
//                           key={submenuItem.href}
//                           className={clsx(
//                             "block px-2 py-1 text-gray-800 dark:text-white",
//                             pathName === submenuItem.href && "text-primary dark:text-primary"
//                           )}
//                           href={submenuItem.href}
//                           size="lg"
//                         >
//                           {submenuItem.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <Link
//                   className={clsx(
//                     "block px-4 py-2 text-gray-800 dark:text-white",
//                     pathName === item.href && "text-primary dark:text-primary"
//                   )}
//                   href={item.href}
//                   size="lg"
//                 >
//                   {item.label}
//                 </Link>
//               )}
//             </NavbarMenuItem>
//           ))}
//         </div>
//       </NavbarMenu>

//       <ThemeSwitch isScrolled={isScrolled} />
//     </NextUINavbar>
//   );
// };

// export default Navbar;
