const init = {
    isLoggedIn: false,
    user: null
}

const currentUser = (state = init, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'LOGIN':
            return ({
                isLoggedIn: true,
                user: action.payload
            });
        case 'LOGOUT':
            return ({
                isLoggedIn: false,
                user: null
            });
        default:
            return state;
    }
};

export default currentUser