'use client'

import Link from 'next/link';
import styles from '@/styles/Common.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                <Image
                    className=""
                    src="/assets/images/logo/sitckerslime.png"
                    alt="sticker slime app"
                    width={50}
                    height={50}
                    priority
                />
                <Image
                    className=""
                    src="/assets/images/logo/logo.png"
                    alt="sticker slime app"
                    width={200}
                    height={50}
                    priority
                />
            </Link>
            <nav>
                <Link href="/">
                    Home
                </Link>
                <Link href="/story">
                    Story
                </Link>
            </nav>
        </div>
    </header>
  );
}
