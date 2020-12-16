import {useState} from 'react'
import Layout from '../components/layout'
import emailjs, {init} from 'emailjs-com'
import { useFetchUser } from '../lib/user'
import { set } from 'date-fns'

export default function Contact() {
    const { user } = useFetchUser()
    // init("user_ZaGeVt3pdHwsfPvskHNAf")
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
        <Layout user={user} >
            <form className="contact-form" onSubmit={sendEmail}>
                <label htmlFor="name">Name</label>
                <input
                    placeholder=""
                    value={user.name} 
                    type="text" 
                    className="form-control" 
                    name={user.name}  
                    onChange={e => 
                    setName(e.target.value)}    
                />
                <label htmlFor="email">Email</label>
                <input
                    placeholder={user.email}
                    value={user.email} 
                    type="email" 
                    className="form-control" 
                    name="user_email"  
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Message</label>
                <textarea
                    name="message" 
                    value={message} 
                    onChange={e => setMessage(e.target.value)}
                    className="form-control"
                />
                <button type="submit" value="send" className="btn btn-primary">Submit</button>
            </form>
        </Layout>
    )
}
