import client from './client';

export const loginApi = (body = {}) => {
    return client('/api/user/login', 'post', body);
}

export const registerApi = (body = {}) => {
    return client('/api/user/register', 'post', body);
}

export const reLoginApi = (body = {}) => {
    return client('/api/user/login/again', 'post', body);
}

export const passwordResetEmailApi = (body = {}) => {
    return client('/api/user/password/email', 'post', body);
}

export const resetPasswordApi = (body = {}) => {
    return client('/api/user/password/reset', 'post', body);
}

export const getUserApi = () => {
    return client('/api/user', 'post');
};