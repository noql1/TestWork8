'use client';

import useAuth from '@/store/auth';
import styles from '@/styles/Footer.module.scss';

const Footer = () => {
  const { user } = useAuth();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div>{year}</div>
      {user && <div>Logged as {user.email}</div>}
    </footer>
  );
};

export default Footer;
