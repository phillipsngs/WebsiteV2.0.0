'use client';

import React from 'react'
import Navbar from "@/components/Navbar";



export default function Layout({fontClass, children}: any) {
    return (
        <>
            <Navbar fontClass={fontClass}/>
            <main className={`${fontClass} content'`}>
                {children}
            </main>
        </>
    )
}
