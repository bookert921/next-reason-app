import {useState} from 'react'
import Layout from '../components/layout'
import emailjs from 'emailjs-com'
import { useFetchUser } from '../lib/user'
import { Container, Form } from 'react-bootstrap'
import styles from '../styles/Contact.module.css'

export default function Contact() {
    const { user, loading } = useFetchUser()
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_ja7ytez', 'template_u5l5gj9', e.target, 'user_ZaGeVt3pdHwsfPvskHNAf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <Layout user={user} loading={loading} className="container">
            {loading && <p>Loading login info...</p>}
            <div className="animate__animated animate__heartBeat">
                <h3 className={styles.subTitle}>
                    Contact Us
                </h3>
            </div>

            {!loading && !user && ( 
                <>
                <Container className={styles.formContainer}>
                    <Form onSubmit={sendEmail}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={name} 
                            type="text" 
                            name="name"  
                            onChange={e => 
                            setName(e.target.value)}    
                        />
                        <label htmlFor="email">Email</label>
                        <Form.Control
                            value={email}
                            type="email" 
                            name="user_email"  
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="message">Message</label>
                        <Form.Control as="textarea"
                            name="message" 
                            value={message} 
                            onChange={e => setMessage(e.target.value)}
                        />
                        <button 
                            type="submit" 
                            value="send" 
                            className="btn btn-primary"
                        >
                            Submit
                        </button>
                    </Form>
                </Container>
                </>
            )}

            {!loading && user && ( 
                <>
                <Container className={styles.formContainer}>
                    <Form onSubmit={sendEmail} >
                        <Form.Label>Name</Form.Label>
                    <div className={styles.formControl}>
                        <Form.Control
                            placeholder={user.name}
                            value={user.name} 
                            type="text" 
                            name="name"  
                            onChange={e => 
                            setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="email">Email</label>
                        <Form.Control
                            value={email}
                            type="email" 
                            name="user_email"  
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="message">Message</label>
                        <Form.Control as="textarea"
                            name="message" 
                            value={message} 
                            onChange={e => setMessage(e.target.value)}
                        />
                    </div>
                    <div className={styles.formControl}>
                        <button 
                            type="submit" 
                            value="send" 
                            className="btn btn-primary button"
                        >
                            Submit
                        </button>
                    </div>
                    </Form>
                </Container>
                </>
            )}
        </Layout>
    )
}
