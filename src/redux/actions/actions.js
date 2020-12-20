

export const addImgToHistory = () => {
    return {
        type: "ADD_IMG_TO_HISTORY",
    }
}

export const fetchImg = () => {
    return { type: 'FETCH_IMG' }
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