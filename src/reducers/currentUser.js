const init = {
    isLoggedIn: false,
    token: null,
    user: null
}

const currentUser = (state = init, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'LOGIN':
            return ({
                isLoggedIn: true,
                user: action.payload.user,
                token: action.payload.token
            });
        case 'LOGOUT':
            return ({
                isLoggedIn: false,
                user: null,
                token: null
            });
        case 'UPDATE_PROFILE':
            return (Object.assign({}, state, {
                user: action.payload
            }));
        default:
            return state;
    }
};

export default currentUser