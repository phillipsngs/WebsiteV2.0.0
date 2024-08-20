import React from 'react'
import styles from "@/pages/extra/Extra.module.scss";
import Image from "next/image";
import tennis_pic from "@/assets/images/tennis.jpg";
import chess_pic from "@/assets/images/chess.png"

export default function index() {
    return (
        <div className={styles.container}>
            <h2>What ... you&apos;re still here? </h2>
            <div className={styles.gridContainer}>
                <div className={styles.descriptionContainer}>
                    <h3 className={styles.heading}>Pickleball</h3>
                    <div className={styles.mainContainer}>
                        <p className={styles.description}>
                            My mom invited me to play pickleball with her this year and I&apos;m happy to say I&apos;ve
                            joined the cult. Some of the rules are a bit unusual, but overall the game
                            is a lot of fun. Many people prefer playing doubles, but I really enjoy playing singles
                            with my friend! She really makes me run around the entire court to hit the ball. </p>
                    </div>
                </div>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.descriptionContainer}>
                    <h3 className={styles.heading}>Tennis</h3>
                    <div className={styles.mainContainer}>
                        <p className={styles.description}> For whatever reason I started playing tennis in the summer of
                            2021 and have been playing on and off ever since. Surprisingly enough, my backhand is far more consistent
                            than my forehand. There is still much work to be done to improve footwork, timing, and forehand!</p>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image src={tennis_pic} className={styles.img} alt="picture of me playing tennis"/>
                </div>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.descriptionContainer}>
                    <h3 className={styles.heading}>Chess</h3>
                    <div className={styles.mainContainer}>
                        <p className={styles.description}>
                            I started playing chess when covid started. Around this time chess.com was hosting many chess events
                            that live streamers from twitch were participating in. Chess streams were streaming the lessons they got
                            with trained players which was very interesting to watch. I prefer playing 5 minute games with 5 second increments. I mainly play the
                            italian as white, and the french as black!</p>
                    </div>
                </div>
                <div className={styles.imgContainerg}>
                    <Image src={chess_pic} className={styles.img} alt="chess board"/>
                </div>
            </div>
        </div>
    )
}

