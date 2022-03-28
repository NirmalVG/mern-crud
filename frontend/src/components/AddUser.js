import React from "react";
import { addUser } from "../Service/api";
import { useHistory } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
};

const AddUser = () => {
    const [user, setUser] = React.useState(initialValues);
    const { name, username, email, phone } = user;
    let history = useHistory();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const addUserDetails = async () => {
        await addUser(user);
        history.push("/");
    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <h1 style={{ textAlign: "center", color: "blue" }}>
                        USER DETAILS
                    </h1>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                name="name"
                                placeholder="Name"
                                onChange={(e) => onValueChange(e)}
                                value={name}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                name="username"
                                placeholder="Username"
                                onChange={(e) => onValueChange(e)}
                                value={username}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => onValueChange(e)}
                                value={email}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="phone"
                                name="phone"
                                placeholder="Phone"
                                onChange={(e) => onValueChange(e)}
                                value={phone}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={() => addUserDetails()}
                        >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddUser;
