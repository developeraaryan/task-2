import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <h1>
        <Link href="/">Banao Technology</Link>
      </h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
