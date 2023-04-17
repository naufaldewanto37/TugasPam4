import { put, takeEvery } from "redux-saga/effects";
import {
  ADD_DATA_REQUEST,
  DELETE_DATA_REQUEST,
  EDIT_DATA_REQUEST,
  ADD_DATA,
  DELETE_DATA,
  EDIT_DATA,
} from "../constants/ActionTypes";

function* addDataSaga(action) {
  try {
    yield put({ type: ADD_DATA, payload: action.payload });
  } catch (error) {
    console.error("Error adding data:", error);
  }
}

function* deleteDataSaga(action) {
  try {
    yield put({ type: DELETE_DATA, payload: action.payload });
  } catch (error) {
    console.error("Error deleting data:", error);
  }
}

function* editDataSaga(action) {
  try {
    yield put({ type: EDIT_DATA, payload: action.payload });
  } catch (error) {
    console.error("Error editing data:", error);
  }
}

function* watchAddDataRequest() {
  yield takeEvery(ADD_DATA_REQUEST, addDataSaga);
}

function* watchDeleteDataRequest() {
  yield takeEvery(DELETE_DATA_REQUEST, deleteDataSaga);
}

function* watchEditDataRequest() {
  yield takeEvery(EDIT_DATA_REQUEST, editDataSaga);
}

export default function* dataSagas() {
  yield all([
    watchAddDataRequest(),
    watchDeleteDataRequest(),
    watchEditDataRequest(),
  ]);
}
    