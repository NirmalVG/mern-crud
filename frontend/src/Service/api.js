import axios from "axios";

const useURL = "http://localhost:4000/users";

export const addUser = async (user) => {
    return await axios.post(`${useURL}`, user);
};

export const getUsers = async (id) => {
    id = id || "";
    return await axios.get(`${useURL}/${id}`, id);
};

export const deleteUser = async (id) => {
    return await axios.delete(`${useURL}/${id}`, id);
};

export default addUser;
