import styles from './Footer.module.css';
import clsx from 'clsx';

function Footer() {
  return (
    <footer className={styles.container}>
      <img src="/images/logo-footer.png" alt="blockchain logo" />
      <p className={clsx('body-short-02', styles.copyright)}>{new Date().getFullYear()} @Blockchain Education</p>
    </footer>
  );
}

export default Footer;
