import { all } from "redux-saga/effects";

import cartSagas from "./cart/sagas";

export default function* rootSaga(): any {
  return yield all([cartSagas]);
}
