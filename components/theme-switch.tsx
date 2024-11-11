"use client";

import { FC } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
import { useAppDispatch } from "@/redux/hooks";
import { setScrolled } from "@/redux/features/scrollSlice";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
  isScrolled: boolean;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
  isScrolled,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();
  const dispatch = useAppDispatch();
  const pathName = usePathname();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");

    dispatch(setScrolled(window.scrollY > 0));
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base,
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",

              "pt-px",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper,
          ),
        })}
      >
        {!isSelected || isSSR ? (
          <SunFilledIcon
            className={`${isScrolled && theme === "light" ? "" : "text-white"}`}
            size={22}
          />
        ) : (
          <MoonFilledIcon
            className={`${!isScrolled && "text-white"} ${isScrolled || theme === "light" ? "text-gray-800" : "text-white"} 
          ${pathName === `/` && !isScrolled ? "text-gray-800 lg:text-white " : "text-gray-800"}`}
            size={22}
          />
        )}
      </div>
    </Component>
  );
};
