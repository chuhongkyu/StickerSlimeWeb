'use client'
import styles from '@/styles/Common.module.scss';
import Image from 'next/image';

export default function Section2() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h3>How Did I Create Sticker Slime?</h3>
                <div className={styles.wrapper}>
                    <Image
                        width={581}
                        height={414}
                        className="img-container-300px"
                        src="/assets/images/main/making00.jpg"
                        alt="sticker_slime_making"
                    />
                    <p className={styles.text}>
                        Get ready to immerse yourself in the enchanting universe of Sticker Slime! Join a variety of cute and colorful slime stickers as they navigate through a rain of falling objects from the sky. Your mission is to help them dodge these obstacles and achieve the highest score possible.
                        <br/><br/>
                        I created this game using Unity, combining my love for art and game development. All the characters in Sticker Slime are designed as adorable stickers, each with its own charm and personality. I drew the illustrations on my iPad, ensuring that every detail reflects the whimsical nature of the game.
                        <br/><br/>
                    </p>
                </div>
                <p className={styles.text}>
                    Use special skills to avoid the falling objects and cast magic spells to smash them. But beware of the Caution objects! Not only do they need to be smashed, but they also slow down your adorable Sticker Slimes, adding an extra layer of challenge.
                    <br/><br/>
                    With its captivating gameplay and endearing characters, Sticker Slime promises hours of fun and excitement. Perfect for players of all ages, this game will have you coming back for more as you strive to beat your own high scores and those of your friends. Sticker Slime is available on both the App Store and Google Play Store—download now and start your adventure with the cutest slimes in the universe!
                </p>
            </div>
        </section>
    );
}