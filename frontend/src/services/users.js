import axios from 'axios';

export const API = "http://localhost:4000";


export const authenticate = async (data) => {

    const response = await axios({
        method: 'post',
        url: `${API}/login`,
        responseType: 'json',
        responseEncoding: 'utf8',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        data: data
    })
    return { status: response.status, response: response.data }
}


export const register = async (data) => {


    const response = await axios({
        method: 'post',
        url: `${API}/registerUser`,
        responseType: 'json',
        responseEncoding: 'utf8',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        data: data
    })
    return { status: response.status, response: response.data }
}
