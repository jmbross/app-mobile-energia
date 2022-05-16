import { all, fork } from 'redux-saga/effects';
import auth from './auth';
import enrollment from './enrollment';
import main from './main';
import dashboard from './dashboard';
import usagePattern from './usagePattern';
import dr from './dr';
import message from './message';
import setting from './setting';

function* rootSaga() {
  yield all([
    fork(auth),
    fork(enrollment),
    fork(main),
    fork(dashboard),
    fork(usagePattern),
    fork(dr),
    fork(message),
    fork(setting),
  ]);
}

export default rootSaga;
