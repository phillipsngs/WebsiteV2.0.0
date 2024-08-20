import React from 'react'
import Image from "next/image";
import styles from '@/pages/projects/Projects.module.scss'
import ExpenseTrackerGif from '@/assets/projects/expense_tracker.gif'
import CampusExplorerGif from '@/assets/projects/campus_explorer.gif'
import CoastCompanionGif from '@/assets/projects/coast_companion.gif'
import FileCentralPic from '@/assets/projects/file_central.png'
import GithubIcon from '@/assets/icons/GithubIcon'

export default function index() {
    return (
        <div className={styles.container}>
            <h2> What have I done?</h2>
            <div className={styles.gridContainer}>
                <div className={styles.descriptionContainer}>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.heading}>File Central</h3>
                        <a className={styles.link} href="https://github.com/phillipsngs/FileCentral" target="_blank">
                            <GithubIcon width={25} height={25} stroke={"white"}/>
                        </a>
                    </div>
                    <p className={styles.descriptionContainer}>
                        A local file sharing app that enables users to send and download files from your desktop
                        computer.
                    </p>
                    <p className={styles.descriptionContainer}>
                        File central is a mini project I created after I built my desktop computer. I found myself
                        wanting to send files from my phone and laptop to my desktop, and grew tired of using email/google drive
                        so I thought it would be fun to build a local app to handle this. Originally, the project used html,
                        but  as someone that cares about aesthetics I decided I would add a react + bootstrap frontend.
                    </p>
                    <p className={styles.descriptionContainer}>
                        Technologies: Python, Flask, React, Bootstrap,
                    </p>

                </div>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src={FileCentralPic} alt={"File Central Pic"}></Image>
                </div>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.descriptionContainer}>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.heading}>Coast Companion</h3>
                        <a className={styles.link} href="https://github.com/TheD3vel0per/CoastCompanionDemo" target="_blank">
                            <GithubIcon width={25} height={25} stroke={"white"}/>
                        </a>
                    </div>
                    <p className={styles.descriptionContainer}> A chatbot that answers questions related to onboarding
                        processes
                        at Coast Capital based on the onboarding files uploaded by users to its knowledge base. </p>
                    <p className={styles.descriptionContainer}> Coast Companion was a project sponsored by coast capital
                        and was
                        my initial foray into leveraging generative AI services offered by AWS. As a preliminary
                        chatbot, coast companion was made with expandability in mind so that it could answer all kinds
                        of questions depending on the files uploaded to its knowledge base. </p>
                    <p className={styles.descriptionContainer}>
                        Technologies: AWS Bedrock, API Gateway, AWS Lambda, AWS S3, React, Bootstrap,
                        Material UI, AW SAM, Node.js, TypeScript, React Jest
                    </p>
                </div>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src={CoastCompanionGif} alt={"Coast Companion Demo"}></Image>
                </div>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.descriptionContainer}>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.heading}>
                            Campus Explorer
                        </h3>
                        <a className={styles.link} href="https://github.com/phillipsngs/CampusExplorer/" target="_blank">
                            <GithubIcon width={25} height={25} stroke={"white"}/>
                        </a>
                    </div>
                    <p className={styles.descriptionContainer}>
                        A web app that enables users to query over ubc course and room datasets.
                        Users can filter for courses based on averages, subjects, professors, etc.... They can also
                        filter for rooms based on size, equipment, chairs, etc...
                    </p>
                    <p className={styles.descriptionContainer}>
                        Campus explorer was an opportunity for me to flex my react skills and to delve
                        deeper into the world of TypeScript. This project was my first foray into asynchronous JavaScript
                        programming and promises.
                    </p>
                    <p className={styles.descriptionContainer}>
                        Technologies: React, Node.js, TypeScript, Mocha, Chai
                    </p>
                </div>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src={CampusExplorerGif} alt={"Campus Explorer Demo"}></Image>
                </div>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.descriptionContainer}>
                    <div className={styles.titleContainer}>
                        <h3 className={styles.heading}>Expense Tracking App</h3>
                        <a className={styles.link} href="https://github.com/phillipsngs/ExpenseTrackingApp" target="_blank">
                            <GithubIcon width={25} height={25} stroke={"white"}/>
                        </a>
                    </div>
                    <p className={styles.descriptionContainer}> An expense tracking app that allows users to budget
                        their
                        finances. Users can add a category and a budget, for example groceries $200. As the weeks go on
                        they would record how much they spent and would see when or if they have gone over the budgets
                        they allocated for the month.</p>
                    <p className={styles.descriptionContainer}> Prior to this app, I was doing frontend work using
                        plain HTML. Expense tracker was a chance for me to learn React and all the powers it gives developers.</p>
                    <p className={styles.descriptionContainer}>
                        Technologies: React
                    </p>
                </div>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src={ExpenseTrackerGif} alt={"Expense Tracker Demo"}></Image>
                </div>
            </div>
        </div>
    )
}
