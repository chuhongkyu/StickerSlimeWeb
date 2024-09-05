'use client'
import styles from '@/styles/Common.module.scss';
import ScreenshotSwiper from './ScreenshotSwiper';

export default function Section1() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h3>Sticker slimes are back!</h3>
                    <div className={styles["btn-group"]}>
                        <a href="https://play.google.com/store/apps/details?id=com.Mr.chu.StickerSlime" target="_blank" rel="noopener noreferrer">
                            <img width="200" src="/assets/images/button/button_download_android.png" alt="Google Play에서 무료 다운로드"/>
                        </a>
                        {/* <a href="">
                            <img width="200" src="/assets/images/button/button_download_ios.png" alt="앱 스토어에서 무료 다운로드"/>
                        </a> */}
                    </div>
                </div>
                <ScreenshotSwiper/>
            </div>
        </section>
    );
  }