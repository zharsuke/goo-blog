import React from "react";
import FooterComponents from "../../components/FooterComponents";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style/auth.css';
import { Link } from 'react-router-dom';

export default function Register() {

    return (
        <div>
            <Container>
                <div className="form">
                    <h3>Sign Up</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn btn-dark mb-3" style={{ width: "100%" }}>
                            Sign Up
                        </Button>
                        <Link to="/auth/login">Already Have Account? Sign In</Link>
                        <FooterComponents/>
                    </Form>
                </div>
            </Container>
        </div>
    )

}