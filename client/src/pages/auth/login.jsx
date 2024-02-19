import React from "react";
import FooterComponents from "../../components/FooterComponents";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style/auth.css';
import { Link } from 'react-router-dom';


export default function Login() {

    return (
        <div>
            <Container>
                <div className="form">
                    <h3>Sign In</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn btn-dark mb-3" style={{ width: "100%" }}>
                            Sign In
                        </Button>
                        <Link to="/auth/register">Don't Have Account? Sign Up</Link>
                        <FooterComponents/>
                    </Form>
                </div>
            </Container>
        </div>
    )

}