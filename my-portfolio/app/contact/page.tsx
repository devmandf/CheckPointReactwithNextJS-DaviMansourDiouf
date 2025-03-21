import Navbar from "@/components/Navbar";
import styles from '../page.module.css';

export default function Contact() {
  return (
    <div className={styles.mainLayout}>
      <Navbar />
      <main className={styles.mainContent}>
        <div className={styles.contentSection}>
          <h1 style={{ 
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            wordBreak: 'break-all',
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            devmandf@gmail.com
          </h1>
        </div>
      </main>
    </div>
  );
}
