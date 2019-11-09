export const setHeaders = (token = null) => {
    let headers = {
        'Content-Type': 'applicaiton/json'
    };
    if (token !== null) {
        headers['Authorization'] = 'Bearer ' + token
    }
    return headers;
}
