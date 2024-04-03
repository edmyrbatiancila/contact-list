import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

function ContactRegister() {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const addContact = () => {
        if(name && email) {
            const newContact = { name, email };
            setContacts([...contacts, newContact]);
            setName("");
            setEmail("");
        }
    }

    return (
        <Form className="box">
        <h1>
            <Badge bg="secondary">CONTACT REGISTRATION FORM</Badge>
        </h1>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your Name"
            required
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your Email"
            required
            />
        </Form.Group>
        <Button className="add" onClick={addContact} type="submit">
            Add
        </Button>

        <section>
            <h2>CONTACTS</h2>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                    <span className="initial">
                        {contact.name.charAt(0)}
                        {contact.name.split(" ")[1]
                        ? contact.name.split(" ")[1].charAt(0)
                        : ""}
                    </span>
                    <span className="contact_name">{contact.name}</span> -{" "}
                    <span className="contact_email">{contact.email}</span>{" "}
                    </li>
                ))}
            </ul>
        </section>
        </Form>
    );
}

export default ContactRegister;