import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Phillips Ng</title>
				<link rel="icon" href="#" />
			</Head>
			<Navbar/>
			<main className={inter.className}>
				<p> hey this is a test</p>
			</main>
		</>
	)
}

