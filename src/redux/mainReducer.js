import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth201154Reducer from '../features/EmailAuth201154/redux/reducers';
import EmailAuth200962Reducer from '../features/EmailAuth200962/redux/reducers';
import CalendarView200960Reducer from '../features/CalendarView200960/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth201154: EmailAuth201154Reducer,
EmailAuth200962: EmailAuth200962Reducer,
CalendarView200960: CalendarView200960Reducer,

});