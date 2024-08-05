import React from 'react'
import ExpenseTrackerGif from '@/assets/projects/expense_tracker.gif'
import CampusExplorerGif from '@/assets/projects/campus_explorer.gif'
import CoastCompanionGif from '@/assets/projects/coast_companion.gif'
import Image from "next/image";
import styles from '@/pages/projects/Projects.module.scss'

export default function index() {
    return (
        <div className={styles.container}>
            <h2> What have I done?</h2>
            <div className={styles.mainContainer}>
                <div className={styles.descriptionContainer}>
                    <h2>Coast Companion</h2>
                    <p className={styles.descriptionContainer}> A chatbot that answers questions related to onboarding processes
                        at Coast Capital based on the onboarding files uploaded by users to its knowledge base. </p>
                    <p className={styles.descriptionContainer}> Coast Companion was a project sponsored by coast capital and was
                        my initial foray into leveraging generative AI services offered by AWS. As a preliminary
                        chatbot, coast companion was made with expandability in mind so that it could answer all kinds
                        of questions depending on the files uploaded to its knowledgebase. </p>
                </div>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src={CoastCompanionGif} alt={"Expense Tracker Demo"}></Image>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.descriptionContainer}>
                    <h2>Campus Explorer</h2>
                    <p className={styles.descriptionContainer}> A web app that enables users to query over ubc course and room
                        datasets. Users can filter for courses based on averages, subjects, professors, etc.... They can
                        also filter for rooms based on size, equipment, chairs, etc... </p>
                    <p className={styles.descriptionContainer}> Campus explorer was an opportunity for me to flex my react skills
                        and to delve deeper into the world of TypeScript. </p>
                </div>
                <div className={styles.imgContainer}>
                <Image className={styles.img} src={CampusExplorerGif} alt={"Campus Explorer Demo"}></Image>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.descriptionContainer}>
                    <h2>Campus Explorer</h2>
                    <p className={styles.descriptionContainer}> An expense tracking app that allows users to budget their
                        finances. Users can add a category and a budget, for example groceries $200. As the weeks go on
                        they would record how much they spent and would see when or if they have gone over the budgets
                        they allocated for the month.</p>
                    <p className={styles.descriptionContainer}> Expense tracker was a chance for me to further develop my
                        frontend skills and move from HTML to React.</p>
                </div>
                <div className={styles.imgContainer}>
                <Image className={styles.img} src={ExpenseTrackerGif} alt={"Expense Tracker Demo"}></Image>

                </div>
            </div>
        </div>
    )
}
