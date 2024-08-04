import React from 'react'
import styles from '@/pages/courses/Courses.module.scss'
export default function index() {
    return (
        <div className={styles.container}>
            <h2> What have I learned? </h2>
            <ul>
                <li>
                    Definition of Programming Languages
                </li>
                <li>
                    Operating Systems Design and Implementation
                </li>
                <li>
                    Advanced Software Engineering
                </li>
                <li>
                    Distributed Systems
                </li>
                <li>
                    Human Computer Interactions
                </li>
                <li>
                    Applied Machine Learning
                </li>
                <li>
                    Internet Computing
                </li>
            </ul>
        </div>
    )
}
