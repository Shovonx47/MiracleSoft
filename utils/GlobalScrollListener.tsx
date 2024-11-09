"use client";
import { useEffect } from "react";

import { setScrolled } from "@/redux/features/scrollSlice";
import { useAppDispatch } from "@/redux/hooks";

const GlobalScrollListener = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      // Always check window.scrollY, and dispatch whether scrolled is true or false
      dispatch(setScrolled(window.scrollY > 0));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return null; // This component doesn't render anything
};

export default GlobalScrollListener;
