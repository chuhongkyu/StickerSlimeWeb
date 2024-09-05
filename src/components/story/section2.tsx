'use client'
import styles from '@/styles/Common.module.scss';
import Image from 'next/image';

export default function Section2() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h3>Sticker Slime</h3>
                <div className={styles.wrapper}>
                    <p className={styles.text}>When we were children, many of us had drawers filled with little treasures and memories—stickers, trinkets, and the limitless imagination of our youth. But what if, hidden inside those drawers, there was a secret world waiting to be discovered? 
                        <br/>
                        <br/>
                        This is where the story of Sticker Slime begins. Inside a seemingly ordinary drawer lies an extraordinary universe. There’s a scorching lava region, a lush forest filled with greenery, and a snow-covered world where cold reigns supreme. Each of these unique areas holds adventures of their own. And within this magical realm, the stickers we once collected spring to life!
                        <br/>
                        <br/>
                        Our beloved Sticker Slimes are on a journey through these mysterious lands, dodging obstacles falling from the sky, and using their magical powers to overcome the challenges they face. As players, you’ll join the Sticker Slimes on their adventures, helping them navigate through peril and excitement, all while enjoying the whimsical world they inhabit.
                    </p>
                    <img
                        className="img-container-50"
                        src="/assets/images/story/drawer.png"
                        alt="sticker drawer"
                    />
                </div>
                <p className={styles.text}>
                    Sticker Slime is not just a game. It’s an invitation to step into a world where the pure imagination of childhood comes alive. So, come and embark on a delightful adventure, where your favorite stickers are ready to leap into action. The magic of the drawer awaits!
                </p>
                
            </div>
        </section>
    );
  }