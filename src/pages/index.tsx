import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Phillips Ng</title>
				<link rel="icon" href="#" />
			</Head>
			<main>
				<p> hey this is a test</p>
			</main>
		</>
	)
}

