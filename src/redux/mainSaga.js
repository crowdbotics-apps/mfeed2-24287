import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth200962Saga from '../features/EmailAuth200962/redux/sagas';
import CalendarView200960Saga from '../features/CalendarView200960/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth200962Saga,
CalendarView200960Saga,
    
  ]);
}