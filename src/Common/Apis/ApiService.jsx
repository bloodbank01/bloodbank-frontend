// src/api/apiService.js
import apiClient from './ApiClient';
import ENDPOINTS from '../endpoints';

const tokens = async () => {
    let token = localStorage.getItem('token')
    return token
}

const errorResponse = (error) => {
    if(error.status == 401){
        localStorage.removeItem('token')
    }

    return { status: false, message: error.response.data.error.message }
}

const validRespones = async (res) => {
    try {
        console.log('valid response ', res)
        if (res.data?.error) {
            console.log('valid errrrr', res.data?.error?.message)
            return { status: false, message: res.data?.error?.message }
        }

        return { status: true, message: res.data?.success?.message, data: res?.data?.data }
    } catch (error) {
        return { status: false, message: "Response Error!" }
    }
}

export const signUp = async (payload) => {
    try {

        const response = await apiClient.post(ENDPOINTS.signUp, payload);
        let res = await validRespones(response)

        if (!res.status) {
            return { status: false, message: res.message }
        }

        return { status: true, message: res.message, data: res.data }

    } catch (error) {
        return errorResponse(error)
    }
};

export const emailVerify = async (payload) => {
    try {

        const response = await apiClient.post(ENDPOINTS.emailVerify, payload);
        let res = await validRespones(response)

        if (!res.status) {
            return { status: false, message: res.message }
        }

        return { status: true, message: res.message, data: res.data }

    } catch (error) {
        return errorResponse(error)
    }
};

export const signIn = async (payload) => {
    try {

        const response = await apiClient.post(ENDPOINTS.signIn, payload);
        let res = await validRespones(response)

        if (!res.status) {
            return { status: false, message: res.message }
        }

        return { status: true, message: res.message, data: res.data }

    } catch (error) {
        return errorResponse(error)
    }
};

export const googleSSO = async (payload) => {
    try {

        const response = await apiClient.post(ENDPOINTS.googleSSO, payload);
        let res = await validRespones(response)

        if (!res.status) {
            return { status: false, message: res.message }
        }

        return { status: true, message: res.message, data: res.data }

    } catch (error) {
        console.log(error, 'hello  New Error:---------->')
        return errorResponse(error)
    }
};

export const forgotPassword = async (payload) => {
    try {

        const response = await apiClient.post(ENDPOINTS.forgotPassword, payload);
        let res = await validRespones(response)

        if (!res.status) {
            return { status: false, message: res.message }
        }

        return { status: true, message: res.message, data: res.data }

    } catch (error) {
        return errorResponse(error)
    }
};

export const resetPassword = async (payload) => {
    try {

        const response = await apiClient.post(ENDPOINTS.resetPassword, payload);
        let res = await validRespones(response)

        if (!res.status) {
            return { status: false, message: res.message }
        }

        return { status: true, message: res.message, data: res.data }

    } catch (error) {
        return errorResponse(error)
    }
};

export const logout = async (payload) => {
    try {

        const response = await apiClient.get(ENDPOINTS.logout, payload);
        let res = await validRespones(response)

        if (!res.status) {
            return { status: false, message: res.message }
        }

        return { status: true, message: res.message, data: res.data }

    } catch (error) {
        return errorResponse(error)
    }
};