"use client";
import { useState, useEffect } from "react";

export default function TopArrowButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`top-arrow-button${showButton ? " show" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-chevron-up"></i>
    </button>
  );
}