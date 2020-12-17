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
      <h3>About</h3>
      <Container>
        <p>
          Untimately, this is an app decidated to growth, community, and learning potentials realized. My hope is that it grows into an all inclusive study space with management tools for prioritizing and optimizing study sessions.
        </p>
        <p>
          Learning can be hard enough as it is. There is so much to know and so little time to do it all. In addition, all the tools and resources you may use to manage your sessions are all over the place. Let us manage help you manage your productivity all in one place. 
        </p>    
        <p>
          The product roadmap is to develop a Communication, Project Management,  and Knowledge Management integrated suite of applications all dedicated to getting the most out of your study time.  
        </p>  
      </Container>
    </Layout>
  )
}

export default About
