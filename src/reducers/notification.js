const init = {
    isSet: false,
    text: '',
    type: 'info'
}

const notification = (state = init, action) => {
    switch (action.type) {
        case 'ADD_NTF':
            return ({
                isSet: true,
                text: action.payload.text,
                type: action.payload.type
            });
        case 'CLOSE_NTF':
            return Object.assign({}, state, {
                isSet: false
            });
        default:
            return state;
    }
}

export default notification;