import styles from '@/pages/about/About.module.scss'
import pictures from '@/assets/images/phillips.jpg'
import Image from 'next/image';
import GithubIcon from "@/assets/icons/GithubIcon";
import React from "react";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";
import MailIcon from "@/assets/icons/MailIcon";

export default function index() {
    return (
        <div className={styles.container}>
            <h2>Who am I?</h2>
            <div className={styles.gridContainer}>
                <div className={styles.contentContainer}>
                    <p className={styles.description}>
                        Ahoy, I&apos;m Phillips! I was previously a software developer at Newton where I designed and
                        implemented a push notification microservice, completed an email migration project, automated
                        off boarding processes, and helped with various bugfixes along the way.</p>
                    <p className={styles.description}>
                         The most memorable courses I&apos;ve taken are: Definition of
                        Programming Languages, Internet Computing, Operating Systems Design and Implementation, and
                        Advanced Software Engineering. These classes play a significant role in shaping my skills as a
                        software developer.
                    </p>
                    <p className={styles.description}>
                        When I&apos;m not at a computer you can find me playing pickleball, tennis, or chess!
                    </p>
                </div>
                <div className={styles.imgContainer}>
                    <Image src={pictures} className={styles.img} alt="picture of me"/>
                    {/*<div className={styles.infoContainer}>*/}
                    {/*    <p>Contact Me:</p>*/}
                    {/*    <div className={styles.iconsContainer}>*/}
                    {/*        <a className={styles.link} href="https://github.com/phillipsngs" target="_blank">*/}
                    {/*            <GithubIcon width={23} height={23} stroke={"white"}/>*/}
                    {/*        </a>*/}
                    {/*        <a className={styles.link} href="https://www.linkedin.com/in/phillipsngs/" target="_blank">*/}
                    {/*            <LinkedinIcon width={25} height={25} stroke={"white"}/>*/}
                    {/*        </a>*/}
                    {/*        <a className={styles.link} href="https://github.com/phillipsngs/ExpenseTrackingApp"*/}
                    {/*           target="_blank">*/}
                    {/*            <MailIcon width={28} height={28} stroke={"white"}/>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}
