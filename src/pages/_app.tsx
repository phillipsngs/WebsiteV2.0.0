import type { AppProps } from 'next/app'
import { Nunito } from '@next/font/google'
import '../styles/global.scss'


const nunito = Nunito({
	subsets: ['latin'],
	weight: ['500', '700', '900', '1000']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
	<main className={`${nunito.className}`}>
		<Component {...pageProps} />
	</main>
	
  )
  
}
