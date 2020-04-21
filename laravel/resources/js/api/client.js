import axios from 'axios';
import { getAccessToken } from '../utils/auth';

const Client = (url, method, data = {}) => {
    const token = getAccessToken();
    const headers = {
        Authorization: `Bearer ${token}`
    }

    return axios({
        method,
        url: url,
        data,
        headers,
        validateStatus: status => {
            return status >= 200 && status < 400;
        }
    })
        .then(response => {
            return Promise.resolve(response);
        }).catch(error => {
            return Promise.reject(error.response);
        });
}

export default Client;