import styles from '../styles/Footer.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Container, Row, Col} from 'react-bootstrap'
function footer() {
    return (
        <>
        <footer className={styles.footer}>  
            <Container fluid>
            <Row>
                <Col>
                </Col>
                <Col>
                    <a
                        href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{flexDirection: 'column', gap: '10px', alignItems: 'center'}}
                    >
                        Powered by{' '}
                        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
                    </a>
                </Col>
                <Col>
                    <Row className="justify-content-center">
                        <h5>Follow Us</h5>
                    </Row>
                    <Row className="justify-content-center" style={{gap: '20px'}}>
                        <a><FontAwesomeIcon icon={['fab', 'twitter']} style={{width: '20px'}}/></a>
                        <a><FontAwesomeIcon icon={['fab', 'facebook']} style={{width: '20px'}}/></a>       
                        <a><FontAwesomeIcon icon={['fab', 'instagram']} style={{width: '20px'}}/></a>  
                        <a href="https://www.linkedin.com/in/bookert921/"><FontAwesomeIcon icon={['fab', 'linkedin']} style={{width: '20px'}}/></a>  
                    </Row>
                </Col>
            </Row>
            </Container>
        </footer>
        </>
    );
}

export default footer;
