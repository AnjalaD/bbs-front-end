export const login = (data) => ({
    type: 'LOGIN',
    payload: data
})

export const logout = () => ({
    type: 'LOGOUT'
})

export const update_profile = (newUser) => ({
    type: 'UPDATE_PROFILE',
    payload: newUser
})

export const set_loading = (loadingText = "Please wait...") => ({
    type: 'SET_LOADING',
    payload: loadingText
})

export const end_loading = () => ({
    type: 'END_LOADING'
})

export const set_admin = (setAdmin) => ({
    type: 'SET_ADMIN',
    payload: setAdmin
})