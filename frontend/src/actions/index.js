export const setFavorites = payload => ({
    type: 'SET_FAVORITES',
    payload
})

export const deleteFavorites = payload => ({
    type: 'DELETE_FAVORITES',
    payload
})

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload
})

export const logoutRequest = payload => ({
    type: 'LOGOUT_REQUEST',
    payload
})

export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload
})

export const getVideoSource = payload => ({
    type: 'GET_VIDEO_SOURCE',
    payload
})