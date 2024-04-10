import styles from '@/styles/components.module.scss'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'

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

