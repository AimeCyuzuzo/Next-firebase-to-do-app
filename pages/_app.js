import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import '../styles/w3.css'
import '../styles/w3colors.css'
import '../styles/w3pro.css'
import { NextUIProvider } from '@nextui-org/react'

function MyApp({ Component, pageProps }) {
  return (
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
  )
}

export default MyApp
