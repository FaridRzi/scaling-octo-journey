import '../styles/globals.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Layout from '../Components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  )
}

export default MyApp
