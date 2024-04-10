import styles from '@/pages/about/About.module.scss'
import pictures from '@/assets/images/phillips.jpg'
import Image from 'next/image';

export default function index() {
    return (
        <div className={styles.container}>
            <h2>Hi! I&apos;m Phillips</h2>
            <div className={styles.mainContainer}>
                <p className={styles.description}> hey this will show up right uh wait what i</p>
                <Image width={400} height={525} src={pictures} className={styles.img} alt="picture of me"/>
            </div>
        </div>
    )
}
