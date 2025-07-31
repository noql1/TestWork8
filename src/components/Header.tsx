'use client';

import Link from 'next/link';
import useAuth from '@/store/auth';
import styles from '@/styles/Header.module.scss';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Test Work 8</Link>
      </div>
      <nav className={styles.nav}>
        {user ? (
          <>
            <span className={styles.userName}>
              {user.firstName} {user.lastName}
            </span>
            <button onClick={logout} className={styles.logout}>
              Logout
            </button>
          </>
        ) : (
          <Link href="/auth/login" className={styles.loginLink}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
