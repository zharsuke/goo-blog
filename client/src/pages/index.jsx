import React from "react";
import NavbarComponents from "../components/NavbarComponents";
import FooterComponents from "../components/FooterComponents";
import Container from 'react-bootstrap/Container';
import imgLanding from '../img/img.png'
import './index.css';
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <div>
            <Container>
                <NavbarComponents/>
                <hr style={{ marginTop: "-10px" }} /> <br /><br />
                <div className="row">
                    <div className="col-md-8 landing">
                        <h1>Discover stories from writers on any topics.</h1>
                        <h3>Join the community and start writing your own stories.</h3>
                        <Link to="auth/register" className="btn btn-dark">Get Started</Link>
                    </div>
                    <div className="col-md-4">
                        <img src={imgLanding} alt="writing" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
            </Container>
            <FooterComponents/>
        </div>
    );
};