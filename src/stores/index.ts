import { combineReducers } from 'redux';
import loading from './loading';
import auth from './auth';
import enrollment from './enrollment';
import main from './main';
import dashboard from './dashboard';
import usagePattern from './usagePattern';
import dr from './dr';
import messages from './message';
import setting from './setting';
import temporary from './temporary';

const rootReducer = combineReducers({
  loading,
  auth,
  enrollment,
  main,
  dr,
  dashboard,
  usagePattern,
  messages,
  setting,
  temporary,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
