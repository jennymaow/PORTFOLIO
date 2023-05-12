import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <button>
        <Link href="/">Logo</Link>
      </button>
      <nav>
        <ul className={styles.headersections}>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <button>
        <Link href="/contact">Contact</Link>
      </button>
    </header>
  );
};

export default Header;
