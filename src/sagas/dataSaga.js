import {call, put, takeEvery} from 'redux-saga/effects';

function* fetchDataAsync() {
  const fetchedData = yield new Promise((resolve) =>
    setTimeout(() => resolve(['Data 1', 'Data 2', 'Data 3']), 2000),
  );
  yield put({type: 'FETCH_DATA_SUCCESS', payload: fetchedData});
}

export function* watchFetchData() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchDataAsync);
}
