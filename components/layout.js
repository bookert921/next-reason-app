import Head from 'next/head'
import Header from './header'
import Footer from './footer'

function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>Book's Blog</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>

      <Header user={user} loading={loading} />

      <main>
        <div className="container">{children}</div>
      </main>

      <Footer />
    </>
  )
}

export default Layout
