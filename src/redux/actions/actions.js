
export const addImgToHistory = (res) => {
    return {
        type: "ADD_IMG_TO_HISTORY",
        data: {
            url: res.data.image_url,
            date: new Date().toLocaleString(),
            id: res.data.id + (Math.random().toFixed(5)*100000),
            title: res.data.title
        }
    }
}

export const refreshImg = () => {
    return async (dispatch) => {
        try{
            dispatch(setLoading);
            let res = await fetch('https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY')
            if(res.ok) {res = await res.json();
                dispatch(addImgToHistory(res));
            } else {
                throw new Error();
            }
        } catch(err){
            dispatch(setError());
        }
                
    }
}

export const delImgFromHistory = () => {
    return {
        type: "DELETE_IMG_FROM_HISTORY",
    }
}

export const switchActiveImg = (index) => {
    return {
        type: "SWITCH_ACTIVE_IMG",
        payload: index
    }
}

export const switchForward = () => {
    return {
        type: "SWITCH_FORWARD"
    }
}

export const switchBack = () => {
    return {
        type: "SWITCH_BACK"
    }
}

export const setError = () => {
    return {
        type: "SET_ERROR"
    }
}

export const setLoading = () => {
    return {
        type: "SET_LOADING"
    }
}