import { TESTING } from "config/config";

export function setHeaders(token = null) {
    let headers = {
        'Content-Type': 'applicaiton/json'
    };
    if (token !== null) {
        headers['Authorization'] = 'Bearer ' + token
    }
    return headers;
}

export function fetchData({
    test = () => { },
    startLoading = () => { },
    endLoading = () => { },
    link,
    options = {},
    onSucces = () => { },
    onFail = () => { },
    error = "error"
}) {
    startLoading();
    if (TESTING) {
        test();
    } else {
        fetch(link, options)
            .then(res => res.json)
            .then(res => {
                endLoading();
                if (res) {
                    onSucces(res);
                } else {
                    onFail();
                }
            })
            .catch(err => console.log(error, err))
    }
}
