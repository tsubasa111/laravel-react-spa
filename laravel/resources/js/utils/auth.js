const accessToken = 'access_token';
const refreshToken = 'refresh_token';
const intendedUrl = 'intendedUrl';
const defaultIntendedUrl = '/home';

export const getAccessToken = () => window.localStorage.getItem(accessToken);
export const getRefreshToken = () => window.localStorage.getItem(refreshToken);

export const setAccessToken = token => {
    token
        ? window.localStorage.setItem(accessToken, token)
        : window.localStorage.removeItem(accessToken);
};
export const setRefreshToken = token => {
    token
        ? window.localStorage.setItem(refreshToken, token)
        : window.localStorage.removeItem(refreshToken);
};

export const getIntendedUrl = () => window.localStorage.getItem(intendedUrl) || defaultIntendedUrl;

export const setIntendedUrl = url => {
    url
        ? window.localStorage.setItem(intendedUrl, url)
        : window.localStorage.removeItem(intendedUrl);
};