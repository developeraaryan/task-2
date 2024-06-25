"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./Styles.module.css";

export default function ScrollToTop() {
  useEffect(() => {
    const scrollToTopButton = document.getElementById("scrollToTop");

    function handleScroll() {
      if (scrollToTopButton) {
        if (window.scrollY > 500) {
          scrollToTopButton.classList.remove(styles.invisible);
          scrollToTopButton.classList.add(styles.visible);
        } else {
          scrollToTopButton.classList.remove(styles.visible);
          scrollToTopButton.classList.add(styles.invisible);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      id="scrollToTop"
      className={`fixed bottom-4 right-4 p-2 bg-transparent text-gray-50 rounded-lg group ${styles.invisible}`}
    >
      <Image
        src="/top.svg"
        alt="Scroll to top"
        width={75}
        height={75}
        className={`group-hover:animate-pulse ${styles.btn}`}
      />
    </button>
  );
}
