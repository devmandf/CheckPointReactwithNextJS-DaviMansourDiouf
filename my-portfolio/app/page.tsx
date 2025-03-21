'use client'

import Navbar from "@/components/Navbar";
import Image from "next/image";
import styles from './page.module.css';
import dynamic from 'next/dynamic';
import animationData from "@/public/animations/Orange Hacker.json";

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export default function Home() {
  return (
    <div className={styles.mainLayout}>
      <Navbar />
      <main className={styles.mainContent}>
        <div className={styles.contentSection} style={{ position: 'relative' }}>
          <Lottie 
            animationData={animationData}
            loop={true}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '1200px',
              height: '1200px',
              zIndex: 0,
              opacity: 0.6,
              filter: 'blur(25px)',
              pointerEvents: 'none'
            }}
          />
          <h1>Bienvenue sur mon portfolio</h1>
          <Image 
            src="/profile.png" 
            width={500}
            height={500}
            alt="Photo de profil"
            style={{ 
              width: '50%', 
              height: 'auto',
              marginTop: '4rem'
            }}
            priority
          />
        </div>
      </main>
    </div>
  );
}
