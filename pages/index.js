import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

export default function Home() {
  const { user, loading } = useFetchUser()
  
  return (
    <Layout user={user} loading={loading} className="container">
      <h1 className={styles.title}>
        BOOK and BEYOND
      </h1>
      
      {loading && <p>Loading login info...</p>}
      
      {!loading && !user && ( 
        <>
          <div className={styles.container}>
            <main className={styles.main}>
              <div className={styles.grid}>
                <a href="https://nextjs.org/docs" className={styles.card}>
                  <h3>Documentation &rarr;</h3>
                  <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a href="https://nextjs.org/learn" className={styles.card}>
                  <h3>Learn &rarr;</h3>
                  <p>Learn about Next.js in an interactive course with quizzes!</p>
                </a>

                <a
                  href="https://github.com/vercel/next.js/tree/master/examples"
                  className={styles.card}
                >
                  <h3>Examples &rarr;</h3>
                  <p>Discover and deploy boilerplate example Next.js projects.</p>
                </a>

                <a
                  href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  className={styles.card}
                >
                  <h3>Deploy &rarr;</h3>
                  <p>
                          Instantly deploy your Next.js site to a public URL with Vercel.
                  </p>
                </a>
              </div>
            </main>
          </div>
        </>
      )}

      {user && (
        <>
          <h4>Rendered user info on the client</h4>
          <img src={user.picture} alt="user picture" />
          <p>nickname: {user.nickname}</p>
          <p>name: {user.name}</p>
        </>
      )}
    </Layout>
  )
}
