'use client'

import Navbar from "@/components/Navbar";
import styles from '../page.module.css';
import dynamic from 'next/dynamic';
import animationData from "@/public/animations/T.json";

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export default function About() {
  return (
    <div className={styles.mainLayout}>
      <Navbar />
      <main className={styles.mainContent}>
        <div className={styles.contentSection} style={{ position: 'relative' }}>
          <Lottie 
            animationData={animationData}
            loop={true}
            speed={0.5}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '1200px',
              height: '1200px',
              zIndex: 0,
              opacity: 0.6,
              filter: 'blur(45px)',
              pointerEvents: 'none'
            }}
          />
          <h1>Développeur Full-Stack & UX/UI Designer</h1>
          <p>Je suis un développeur passionné par la création d'expériences web innovantes et intuitives. Mon expertise couvre le développement front-end et back-end, ainsi que le design d'interfaces utilisateur.</p>
        </div>
      </main>
    </div>
  );
}
