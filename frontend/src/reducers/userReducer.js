export const userReducer = (state = {}, action) => {

    if (action.type === '@users/register') return action.payload

    else if (action.type === '@users/login') return action.payload

    return state
}


// ========== ACTION CREATORS ==========

export const registerUser = (content) => {
    return ({
        type: '@users/register',
        payload: content
    })
}

export const login = (credentials) => {
    return ({
        type: '@users/login',
        payload: credentials
    })
}