import NavBar from '@/components/NavBar';
import styles from './EcosystemMap.module.css';

function EcosystemMap() {
  return (
    <div>
      <NavBar />
      <main className={styles.container}>
        <div className={styles.content}></div>
      </main>
    </div>
  );
}

export default EcosystemMap;
