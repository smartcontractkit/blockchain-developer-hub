import NavBar from '@/components/NavBar';
import NavLink from '@/components/NavLink';
import styles from './EcosystemMap.module.css';

function EcosystemMap() {
  return (
    <div>
      <NavBar />
      <main className={styles.container}>
        <div className={styles.content}>
          <h1>The Smart Contract Ecosystem Map</h1>
          <p>
            The ecosystem tools map outlines the entire smart contract developer ecosystem, and all of the tools and
            products smart contract developers may need to rely on.
          </p>
          <NavLink type="primary" />
        </div>
      </main>
    </div>
  );
}

export default EcosystemMap;
