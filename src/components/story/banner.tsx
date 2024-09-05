'use client'

import styles from '@/styles/Common.module.scss';
import Image from "next/image";

export default function Banner() {
  return (
    <section className={styles.banner}>
        <div className={styles["container-column"]}>
            <div className="img-container">
                <img
                    src="/assets/images/story/story.jpg"
                    alt="sticker slime app"
                />
            </div>
        </div>
    </section>
  );
}
