import type { AppProps } from 'next/app'
import { Work_Sans } from '@next/font/google'
import '../styles/global.scss'
import Layout from '@/components/Layout'



const work_sans = Work_Sans({
	subsets: ['latin'],
	display: "block",
	weight: ["200" , "300", "400", "500", "600", "700", "800", "900"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
	
	<Layout className={work_sans.className}>
		<style jsx global>{`
        html {
          font-family: ${work_sans.style.fontFamily};
        }
      `}</style>
		<Component {...pageProps} />
	</Layout>
  )
  
}
