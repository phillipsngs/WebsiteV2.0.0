import type {AppProps} from 'next/app'
import '@/styles/global.scss'
import Layout from '@/components/Layout'
import {Nunito} from "next/font/google";

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['400', '700']
})


export default function App({Component, pageProps}: AppProps) {
    return (
        <Layout fontClass={nunito.className}>
            <Component {...pageProps} />
        </Layout>
    )
}
