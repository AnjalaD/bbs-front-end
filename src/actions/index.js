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

export const set_loading = (isLoading) => ({
    type: 'SET_LOADING',
    payload: isLoading
})