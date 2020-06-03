import { AppProps } from 'next/app'
import '../styles/global.css'
import { withApollo } from '../lib/apollo'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withApollo({ ssr: true })(App)