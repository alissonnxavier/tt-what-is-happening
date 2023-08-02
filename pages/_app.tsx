import Modal from '../components/Modal'
import Layout from '../components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Modal isOpen actionLabel='Submit' title='Test Modal'/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
