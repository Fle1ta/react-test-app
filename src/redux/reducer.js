import {addImgToHistory, 
        delImgFromHistory,
        setError,
        setLoading,
    } from "./actions/actionsTypes"

let initialState = {
    imgs: [],
    loading: true,
    isError: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){

        case addImgToHistory: 
            let newImgArray = [action.payload, ...state.imgs];
            return {
                ...state,
                imgs: newImgArray,
                loading: false 
            }

        case delImgFromHistory:
            let newDelImgArray =[...state.imgs];
            newDelImgArray.splice(action.payload, 1);
            return {
                ...state,
                imgs: newDelImgArray,
                loading: newDelImgArray.length ? false : true
            }  

        case setError:
            return {
                ...state,
                loading: false,
                isError: true
            }
        
        case setLoading:
            return {
                ...state,
                loading: true,
                isError: false
            };

        default: return state;
    }
}

export default reducer;