import React from 'react'
import styles from '../../styles/components.module.scss'
import coursesStyles from '../../styles/courses.module.scss'

type Props = {}

export default function Courses({}: Props) {
  return ( <div className={coursesStyles.gridContainer}>
		<h2 className={`${styles.subHeadingText}`}>
			CPSC 310 - Introduction to Software Engineering
		</h2>
		<h2 className={`${styles.subHeadingText}`}>
			CPSC 344 - Introduction to Human Computer Interaction
		</h2>
		<h2 className={`${styles.subHeadingText}`}>
			CPSC 317 - Internet Computing
		</h2>
		<h2 className={`${styles.subHeadingText}`}>
			CPSC 313 - Computer Hardware and Operating Systems
		</h2>
		<h2 className={`${styles.subHeadingText}`}>
			CPSC 210 - Software Construction
		</h2>
		<h2 className={`${styles.subHeadingText}`}>
			CPSC 304 - Introduction to Relational Databases
		</h2>
		<h2 className={`${styles.subHeadingText}`}>
			CPSC 213 - Introduction to Computer Systems
		</h2>
		<h2 className={`${styles.subHeadingText}`}>
			CPSC 320 - Intermediate Algorithm Design and Analysis
		</h2>
	</div>
  )
}