import React from 'react'
import experienceStyles from '../../styles/experience.module.scss'
import styles from '../../styles/components.module.scss'

type Props = {}

export default function index({}: Props) {
  return (
	<div className={experienceStyles.gridContainer}>
		<h2 className={`${styles.subHeadingText}`}>
			UBC Querier
		</h2>
		
		<h2 className={`${styles.subHeadingText}`}>
			Finance Tracker
		</h2>

		<h2 className={`${styles.subHeadingText}`}>
			Weather App
		</h2>

		<h2 className={`${styles.subHeadingText}`}>
			Real Estate Database
		</h2>

		<h2 className={`${styles.subHeadingText}`}>
			Grade Tracker
		</h2>
		
		<h2 className={`${styles.subHeadingText}`}>
			Battle Ship
		</h2>
	</div>
  )
}