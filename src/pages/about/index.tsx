import React from 'react'
import aboutStyles from '../../styles/about.module.scss'
import styles from '../../styles/components.module.scss'
import profilePic from '../../assets/ProfilePic.png'
import Image from 'next/image'

export default function index() {
  return (
	<div className={aboutStyles.gridContainer}>
	<h1 className={`${styles.headerText} ${aboutStyles.stub}`}>
		Hello, I'm Phillips!
	</h1>
	<p>
		A Software Developer and Computer Science Student studying at the University of British Columbia.
	</p>
	<p>
		My interests are primarily in Distributed Systems, UX/UI Design, and writing software that is easily understood and extended.
	</p>
	<div className={`${aboutStyles.imgContainer} ${aboutStyles.gridSpan1Col}`}>
		<Image 
			className={`${aboutStyles.img}`}
			src={profilePic}
			alt="Picure of me"
		/>
	</div>
</div>
  )
}
