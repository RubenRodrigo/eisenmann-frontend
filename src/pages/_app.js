import { useRouter } from 'next/router'
import { Provider } from 'react-redux'

import { Layout } from '../components/Layout/Layout'
import { useStore } from '../store/store'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      {
        (router.pathname !== '/login')
          ?
          (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )
          :
          (
            <Component {...pageProps} />
          )
      }
    </Provider>
  )
}

export default MyApp
