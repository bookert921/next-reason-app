import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import {Container,Col, Row} from 'react-bootstrap'

export default function Home() {
  const { user, loading } = useFetchUser()
  
  return (
    <Layout user={user} loading={loading}>
      {loading && <p>Loading login info...</p>}
      
      <h1 className={styles.title}>
        BOOK and BEYOND
      </h1>
      
      <div className={styles.container}>
        <main className={styles.mainContent}>
          <img
            className={styles.showpiece}
            src="/ben-white-qDY9ahp0Mto-unsplash.jpg" 
          ></img>
          <p className={styles.mainText}>
            Hello! My name is Booker, and I am a full-stack software engineer.
          </p>
          <div className="animate__animated animate__backInDown animate__delay-4s">
            <h2 className={styles.subTitle}>
              Welcome!
            </h2>
          </div>  
        </main> 
      </div>
    </Layout>
  )
}
