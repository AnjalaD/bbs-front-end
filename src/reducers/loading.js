const loading = (state = false, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'SET_LOADING':
            return action.payload
        default:
            return state;
    }
};

export default loading