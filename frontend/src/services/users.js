import axios from 'axios';

const API = "http://localhost:4000";


export const authenticate = async (data) => {

    const response = await axios.post(`${API}/login`, data)
    return { status: response.status, response: response.data }
}


export const register = async (data) => {

    const response = await axios.post(`${API}/registerUser`, data)
    return { status: response.status, response: response.data }
}
