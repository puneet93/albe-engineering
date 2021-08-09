<<<<<<< HEAD
import { useState } from 'react';
import {Form, Button} from 'react-bootstrap'

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
          name,
          email,
          message,
        };
        // console.log(data);

        fetch('/api/contact', {
            method: 'post',
            body: JSON.stringify(data),
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
                <Form.Control type="text" onChange={e => setName(e.target.value)} placeholder="Name" required={true} />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" required={true} />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control type="message" as="textarea" onChange={e => setMessage(e.target.value)} rows={5} placeholder="Message" required={true} />
            </Form.Group>

            <Button className="btn-cta w-100 btn-cta-blue rounded-0 border-0" type="submit">
                Send
            </Button>
        </Form>
    );
}

=======
import {Form, Button} from 'react-bootstrap'

function ContactForm() {
    return (
        <Form>
            <Form.Group className="mb-4">
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Control type="message" as="textarea" rows={5} placeholder="Message" />
            </Form.Group>

            <Button className="btn-cta w-100 btn-cta-blue rounded-0 border-0" type="submit">
                Send
            </Button>
        </Form>
    );
}

>>>>>>> 542e649c145194fc95be9192c9575c66ff9c7f04
export default ContactForm;