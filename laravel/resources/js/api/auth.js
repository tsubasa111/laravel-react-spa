import client from './client';

export const getUser = () => {
    return client('/api/login/')
        .then((data) => data)
        .catch((data) => data);
};