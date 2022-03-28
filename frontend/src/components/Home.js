import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <Link to="/users">AddUser</Link>
            <br />
            <Link to="/allusers">AllUsers</Link>
        </Container>
    );
};

export default Home;
