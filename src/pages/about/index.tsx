import styles from '@/pages/about/About.module.scss'
import pictures from '@/assets/images/phillips.jpg'
import Image from 'next/image';

export default function index() {
    return (
        <div className={styles.container}>
            <h2>Who am I?</h2>
            <div className={styles.gridContainer}>
                <div className={styles.contentContainer}>
                    <p className={styles.description}>Ahoy, I&apos;m Phillips! I was previously a software developer at
                        Newton
                        where I designed and implemented a push notification microservice, completed an email migration
                        project, automated off boarding processes, and helped with various bugfixes along the way.</p>
                    <p className={styles.description}>Some of my interests include human computer interaction,
                        programming language design, and type systems.</p>
                    <p className={styles.description}>Outside of computer science I enjoy: Pickleball, running, chess,
                        and tennis!</p>
                </div>
                <div className={styles.imgContainer}>
                    {/*<Image width={400} height={525} src={pictures} className={styles.img} alt="picture of me"/>*/}

                    <Image src={pictures} className={styles.img} alt="picture of me"/></div>
            </div>
        </div>
    )
}
