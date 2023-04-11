import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import type { AppProps } from 'next/app'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
