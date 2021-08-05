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

export default ContactForm;