const init = {
    isLoading: false,
    text: ''
}
const loading = (state = init, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'SET_LOADING':
            return ({
                isLoading: true,
                text: action.payload
            });
        case 'END_LOADING':
            return ({
                isLoading: false,
                text: ''
            });
        default:
            return state;
    }
};

export default loading