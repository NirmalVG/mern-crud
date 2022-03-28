import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { getUsers, deleteUser } from "../Service/api";

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    };

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    };

    return (
        <Container className="mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr className="bg-primary text-light">
                        <th>id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td className="text-center">
                                <Button
                                    variant="danger"
                                    onClick={() => {
                                        deleteUserData(user._id);
                                    }}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default AllUsers;
