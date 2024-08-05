import React from 'react'
import styles from '@/pages/courses/Courses.module.scss'

export default function index() {
    return (
        <div className={styles.container}>
            <h2> What have I learned? </h2>
            <div className={styles.contentContainer}>
                <h3>
                    Definition of Programming Languages
                </h3>
            </div>
            <div className={styles.contentContainer}>
                <h3>
                    Operating Systems Design and Implementation
                </h3>
            </div>
            <div className={styles.contentContainer}>
                <h3>
                    Advanced Software Engineering
                </h3>
            </div>
            <div className={styles.contentContainer}>
                <h3>
                    Distributed Systems
                </h3>
            </div>
            <div className={styles.contentContainer}>
                <h3>
                    Human Computer Interactions
                </h3>
            </div>
            <div className={styles.contentContainer}>
                <h3>
                    Applied Machine Learning
                </h3>
            </div>
            <div className={styles.contentContainer}>
                <h3>
                    Internet Computing
                </h3>
            </div>

        </div>
    )
}
