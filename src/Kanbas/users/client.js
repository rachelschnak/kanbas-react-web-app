import axios from "axios";

//const request = axios.create({withCredentials: true,});

//const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";
//const API_BASE = process.env.REACT_APP_API_BASE_URL;
//const USERS_API = process.env.REACT_APP_API_URL || `${API_BASE}/api/users`;

export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:3000";
export const USERS_API = `${BASE_API}/api/users`;

export const createUser = async (user) => {
    const response = await axios.post(`${USERS_API}`, user);
    return response.data;
};

export const signup = async (credentials) => {
    const response = await axios.post(
        `${USERS_API}/signup`, credentials);
    return response.data;
    };

export const signin = async (credentials) => {
    const response = await axios.post(`${USERS_API}/signin`, credentials);
    return response.data;
};
export const signout = async () => {
    const response = await axios.post(`${USERS_API}/signout`);
    return response.data;
};

export const account = async () => {
    const response = await axios.post(`${USERS_API}/account`);
    return response.data;
};

export const findAllUsers = async () => {
    const response = await axios.get(`${USERS_API}`);
    return response.data;
};

export const findUserById = async (id) => {
    const response = await axios.get(`${USERS_API}/${id}`);
    return response.data;
};

export const updateUser = async (id, user) => {
    const response = await axios.put(`${USERS_API}/${id}`, user);
    return response.data;
};

export const deleteUser = async (id) => {
    const response = await axios.delete(`${USERS_API}/${id}`);
    return response.data;
};