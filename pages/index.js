import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import {Col, Row} from 'react-bootstrap'

export default function Home() {
  const { user, loading } = useFetchUser()
  
  return (
    <Layout user={user} loading={loading}>
      <h1 className={styles.title}>
        BOOK and BEYOND
      </h1>
      
      {loading && <p>Loading login info...</p>}
      
        <>
          <div className={styles.container}>
            <main className={styles.main}>
                <img 
                  src="/ben-white-qDY9ahp0Mto-unsplash.jpg" 
                  style={{width: '300px', maxWidth: '500px', display: 'flex'}}
                ></img>
                <p>
                  Welcome to <em>BookNBeyond</em>. My name is Booker, and I am a full-stack software engineer. My goal with this project is not just to provide a space for great ideas but to develop it into a full scale learning and social networking platform.
                </p>
            </main> 
          </div>
        </>
    </Layout>
  )
}
