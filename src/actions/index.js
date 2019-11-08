export const login = (user) => ({
    type: 'LOGIN',
    payload: user
})

export const logout = () => ({
    type: 'LOGOUT'
})

export const update_profile = (newUser) => ({
    type: 'UPDATE_PROFILE',
    payload: newUser
})

export const set_loading = (isLoading) => ({
    type: 'SET_LOADING',
    payload: isLoading
})