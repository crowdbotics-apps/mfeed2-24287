import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView201156Saga from '../features/CalendarView201156/redux/sagas';
import EmailAuth201154Saga from '../features/EmailAuth201154/redux/sagas';
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
CalendarView201156Saga,
EmailAuth201154Saga,
EmailAuth200962Saga,
CalendarView200960Saga,
    
  ]);
}