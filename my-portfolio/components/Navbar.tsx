'use client'

import Link from "next/link";
import styles from './Navbar.module.css';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className={styles.hamburger} 
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>
      <nav className={`${styles.navbar} ${isOpen ? styles.navbarOpen : ''}`}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.navLink} onClick={closeMenu}>Accueil</Link>
          <Link href="/about" className={styles.navLink} onClick={closeMenu}>À propos</Link>
          <Link href="/projects" className={styles.navLink} onClick={closeMenu}>Projets</Link>
          <Link href="/contact" className={styles.navLink} onClick={closeMenu}>Contact</Link>
        </div>
      </nav>
      {isOpen && (
        <div className={styles.overlay} onClick={closeMenu} />
      )}
    </>
  );
}
