import { all } from "redux-saga/effects";
import dataSagas from "./DataSagas";

export default function* rootSaga() {
  yield all([dataSagas()]);
}
