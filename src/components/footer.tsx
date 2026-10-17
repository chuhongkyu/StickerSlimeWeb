'use client'

import Link from 'next/link';
import styles from '@/styles/Common.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/privacy">
            Privacy Policy
          </Link>
          <Link href="/userDelete">
            Account Deletion
          </Link>
        </div>
        <hr/>
        <div className={styles.companyInfo}>
          <p><strong>Company:</strong> 북캣</p>
          <p>
            <a href="mailto:team@bookcat.info">team@bookcat.info</a>
            {" · "}
            <a href="https://bookcat.info" target="_blank" rel="noopener noreferrer">bookcat.info</a>
          </p>
          <p>© 2026 BookCat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
