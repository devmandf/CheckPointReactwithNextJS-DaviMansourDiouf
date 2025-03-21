'use client'

import Navbar from "@/components/Navbar";
import Image from "next/image";
import styles from '../page.module.css';

export default function Projects() {
  return (
    <div className={styles.mainLayout}>
      <Navbar />
      <main className={styles.mainContent}>
        <div className={styles.contentSection}>
          <h1>Mes projets</h1>
          <Image 
            src="/project1.png" 
            width={500}
            height={500}
            alt="Projet 1"
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
      </main>
    </div>
  );
}
