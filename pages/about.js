import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import styles from '../styles/About.module.css'
import {Container, Row, Col} from 'react-bootstrap'

function About() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
        <h1 className={styles.title}>
          BOOK and BEYOND
        </h1>
        <div className="animate__animated animate__backInLeft">
          <h3 className={styles.subTitle}>About</h3>
        </div>
      <Container >
        <Row className={styles.override} >
          <Col className={styles.showContainer}>
            <img className={styles.showpiece} src="/road-trip-with-raj-o4c2zoVhjSw-unsplash.jpg "></img>
          </Col>
          
          <Col>
              <p >
                I am on a journey towards becoming a software engineer.
              </p>
              <p>
                Here you can read my blog posts about learning software engineering, as well as, what to do (and what not to do) after graduation!
              </p>
          </Col>
          <Col>
            <img className={styles.showpiece2} src="/scott-graham-5fNmWej4tAA-unsplash.jpg "></img>
          </Col>

          <Col>
              <p>
                The roadmap for this project involves to develop a Communications, Project Management,  and Knowledge Management integrated suite of applications, all dedicated to getting the most out of your programming, with related articles on improving learning and improving the quality of your coding sessions.   
              </p>
          <Col>
            <p>
              I called it Book and Beyond because it's about taking yourself to the <em>Next</em> level.
            </p>
          </Col>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default About
