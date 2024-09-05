'use client'

import styles from '@/styles/Common.module.scss';
import Image from "next/image";

export default function Banner() {
  return (
    <section className={styles.banner}>
        <div className={styles.container}>
            <h1>Sell<br/> Memories</h1>
            <Image
                className=""
                src="/assets/images/main/main_icon.png"
                alt="sticker slime app"
                width={180}
                height={180}
                priority
            />
        </div>
    </section>
  );
}
