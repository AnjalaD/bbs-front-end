const admin = (state = false, action) => {
    switch (action.type) {
        case 'SET_ADMIN':
            return action.payload;
        default:
            return state;
    }
}

export default admin;