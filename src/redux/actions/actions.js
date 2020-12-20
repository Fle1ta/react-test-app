
export const addImgToHistory = (res) => {
    return {
        type: "ADD_IMG_TO_HISTORY",
        payload: {
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
                dispatch(setError());
            }
        } catch(err){
            dispatch(setError());
        }
                
    }
}

export const delImgFromHistory = (index) => {
    return {
        type: "DELETE_IMG_FROM_HISTORY",
        payload: index
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