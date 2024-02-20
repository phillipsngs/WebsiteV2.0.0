'use client';
import React from 'react'
import styles from '../styles/components.module.scss'
import Link from 'next/link'

export default function Navbar({fontClass}: any) {
    return (
        <div className={`${styles.navbar} ${fontClass}`}>
            <Link href="/about">About</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/extra">Extra</Link>
        </div>
    )
}
