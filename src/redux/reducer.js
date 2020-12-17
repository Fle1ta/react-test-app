import {addImgToHistory, 
        delImgFromHistory, 
        switchActiveImg,
        switchForward,
        switchBack,
        setError,
        setLoading
    } from "./actions/actionsTypes"

let initialState = {
    imgs: [],
    currentHistImg: 0,
    loading: true,
    isError: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){

        case addImgToHistory: 
            let newImgArray = [...state.imgs, action.data];
            console.log(newImgArray);
            return {
                ...state,
                imgs: newImgArray,
                loading: false 
            }

        case delImgFromHistory: 
            if(state.imgs.length > 1) {
                let newDelImgArray =[...state.imgs];
                let newCurrent = (state.currentHistImg === 0) ? 0 : state.currentHistImg-1;
                newDelImgArray.splice(state.currentHistImg, 1);
                console.log(newDelImgArray, newCurrent);
                return {
                    ...state,
                    imgs: newDelImgArray,
                    currentHistImg: newCurrent
                }
            } else {
                return state
        }

        case switchActiveImg:
            return {
                ...state,
                currentHistImg: action.payload
            }
        
        case switchForward: 
            let forvadImg =  (state.currentHistImg === state.imgs.length-1) ? state.currentHistImg : state.currentHistImg + 1;
            return {
                ...state,
                currentHistImg: forvadImg
            }
        case switchBack: 
            let backImg = (state.currentHistImg === 0) ? state.currentHistImg : state.currentHistImg - 1;
            return {
                ...state,
                currentHistImg: backImg
            }
        
        case setError: 
            return {
                ...state,
                loading: false,
                isError: true
            }
        
        case setLoading: {
            return {
                ...state,
                loading: true,
                isError: false
            }
        }

        default: return state;
    }
}

export default reducer;