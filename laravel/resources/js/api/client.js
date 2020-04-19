import axios from 'axios';
import NProgress from 'nprogress';
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
        data,
        validateStatus: status => {
            return status > 400;
        }
    })
        .then(response => {
            if ((--requestsCounter) === 0) {
                NProgress.done();
            }

            return Promise.resolve(response);
        }).catch(error => {
            if (requestsCounter > 0 && ((--requestsCounter) === 0)) {
                NProgress.done();
            }
            return Promise.reject(error.response);
        });
}

export default Client;