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
          <p><strong>Address:</strong> 경기도 성남시 분당구 대왕판교로645번길 12, 8,9층 64호(삼평동, 경기 창조경제혁신센터)</p>
          <p><strong>Email:</strong> <a href="mailto:mrbizinisu@gmail.com">mrbizinisu@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
}
