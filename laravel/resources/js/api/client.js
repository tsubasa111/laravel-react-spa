import axios from 'axios';
import { getAccessToken } from '../utils/auth';
let requestsCounter = 0;

const Client = (url, method, data = {}) => {
    const token = getAccessToken();
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    requestsCounter++;
    NProgress.start();

    return axios({
        method,
        url: url,
        data
    })
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                if ((--requestsCounter) === 0) {
                    NProgress.done();
                }
                return response.json();
            }

            return Promise.reject(response);
        }).catch(error => {
            if (requestsCounter > 0 && ((--requestsCounter) === 0)) {
                NProgress.done();
            }
            return Promise.reject(error);
        });
}

export default Client;