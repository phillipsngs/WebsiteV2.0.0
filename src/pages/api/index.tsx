import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
	return (
		<>
			<Navbar/>
			<main className={`${styles.main} ${inter.className}`}>
				<p> this is another test</p>
			</main>
		</>
	)
}

