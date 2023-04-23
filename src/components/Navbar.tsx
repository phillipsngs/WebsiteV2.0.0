'use client';

import React from 'react'
import styles from '../styles/components.module.scss'

export default function Navbar(props: {}) {
  return (
	<div className={styles.navbar}> 
		<ul>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/experience">Experience</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li>
				<a href="/courses">Courses</a>
			</li>
			<li>
				<a href="/tools">Tools</a>
			</li>
			<li>
				<a href="/extra">Extra</a>
			</li>
		</ul>
	</div>
  )
}
