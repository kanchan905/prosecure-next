"use client";
import Loader from "./Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "@/redux/slices/uiSlice";
import { usePathname } from "next/navigation";

export default function GlobalLoader() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.ui.loader);

  useEffect(() => {
    dispatch(setLoader(true));
    // Simulate loading delay for demo, replace with actual data fetching if needed
    const timeout = setTimeout(() => {
      dispatch(setLoader(false));
    }, 700);
    return () => clearTimeout(timeout);
  }, [pathname, dispatch]);

  if (!loader) return null;
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 9999 }}>
      <Loader />
    </div>
  );
} 