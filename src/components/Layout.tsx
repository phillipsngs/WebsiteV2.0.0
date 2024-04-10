'use client';
import React from 'react'
import Navbar from "@/components/Navbar";
import styles from '@/components/Layout.module.scss'


export default function Layout({fontClass, children}: any) {
    return (
        <div className={fontClass}>
            <Navbar/>
            {children}
        </div>
    )
}
