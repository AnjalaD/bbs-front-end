const init = {
    isLoggedIn: false,
    user: null
}

const currentUser = (state = init, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isLoggedIn: true,
                user: action.payload
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLoggedIn: false,
                user: null
            });
        default:
            return false;
    }
};

export default currentUser