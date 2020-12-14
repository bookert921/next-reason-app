import '../styles/globals.css'
const Page = require('../src/components/layout/Page.bs').make;

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>  
  )
}

export default MyApp
