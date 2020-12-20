import { call, put, takeEvery } from 'redux-saga/effects';
import { setLoading } from './actions/actions';

export function* fetchImg(){
    try{
        put(setLoading());
        let data = yield call(() => fetch('https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY'));
        data = yield call(() => data.json());
        yield put({type: "ADD_IMG_TO_HISTORY", payload: {
                                                            url: data.data.image_url,
                                                            date: new Date().toLocaleString(),
                                                            id: data.data.id + (Math.random().toFixed(5)*100000),
                                                            title: data.data.title
                                                        }})
        
    } catch(err){
         yield put({type: "SET_ERROR", err})
    }
}

export function* watchFetchData() {
    yield takeEvery('FETCH_IMG', fetchImg)
  }