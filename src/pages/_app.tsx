import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import type { AppProps } from 'next/app'
import Layout from '@/components/layout'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: { session , ...pageProps} }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>)
}
