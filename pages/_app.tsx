import LoginModal from '../components/modal/LoginModal'
import Layout from '../components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import RegisterModal from '@/components/modal/RegisterModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
