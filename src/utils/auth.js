import Cookies from 'js-cookie'

const TokenKey = 'token' 
const REMEMBER = "REMEMBER";

const USER_INFO = "USER_INFO";
const PARAMS = "PARAMS";
const AUTHS = "AUTHS";


export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}


export function removeToken() {
    return Cookies.remove(TokenKey)

    
}




// REMEMBER
export const getRemember = () => {
    return Cookies.get(REMEMBER);
}

export const setRemember = (data) => {
    return Cookies.set(REMEMBER, data, { expires: 7 }); //7天过期
}

export const removeRemember = () => {
    return Cookies.remove(REMEMBER);
}

// USER_INFO
export const getUserInfo = () => {
    return sessionStorage.getItem(USER_INFO);
}

export const setUserInfo = (data) => {
    return sessionStorage.setItem(USER_INFO, data);
}

export const removeUserInfo = () => {
    return sessionStorage.removeItem(USER_INFO);
}

// PARAMS
export const getParams = () => {
    return sessionStorage.getItem(PARAMS);
}

export const setParams = (data) => {
    return sessionStorage.setItem(PARAMS, data);
}

export const removeParams = () => {
    return sessionStorage.removeItem(PARAMS);
}
// AUTHS
export const getAuths = () => {
    return sessionStorage.getItem(AUTHS);
}

export const setAuths = (data) => {
    return sessionStorage.setItem(AUTHS, data);
}

export const removeAuths = () => {
    return sessionStorage.removeItem(AUTHS);
}