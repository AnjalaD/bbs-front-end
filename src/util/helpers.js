import { TESTING } from "config/config";
import { end_loading } from "actions";
import { set_loading } from "actions";

export function setHeaders(token = null) {
    let headers = {
        'Content-Type': 'application/json'
    };
    if (token !== null) {
        headers['Authorization'] = 'Bearer ' + token
    }
    return headers;
}

export function fetchData({
    dispatch,
    test = () => { },
    startLoading = () => set_loading('Loading Data...'),
    endLoading = () => { },
    link,
    options = {},
    onSuccess = () => { },
    onFail = () => { },
    error = "error"
}) {
    if (TESTING) {
        test();
    } else {
        dispatch(startLoading());
        fetch(link, options)
            .then(res => res.json())
            .then(res => {
                console.log(link, options)
                console.log('fetch res', res);
                dispatch(end_loading());
                if (res.code === '200' || res.code === 200) {
                    console.log('response success');
                    onSuccess(res);
                } else {
                    onFail(res);
                }
            })
            .catch(err => {
                dispatch(end_loading());
                console.log(err);
            })
    }
}
