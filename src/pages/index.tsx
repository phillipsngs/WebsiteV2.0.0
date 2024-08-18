import { Inter } from '@next/font/google'
import React from "react";
import styles from "@/styles/components.module.scss";
import Index from "./about/index"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<Index/>
	)
}

