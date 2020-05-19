import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import {Creators as FeatureActions, Types as FeatureTypes } from '!/store/ducks/feature'

function* doRequest(action) {
    //try {
    //    const { data } = action.payload;
    //    yield call(api.get, `/url/data);`
    //    yield put(FeatureActions.success(data);
    //catch (error) {
    //    yield put(FeatureActions.failure()
    //}
    yield console.log('doRequest');
}

export default function* rootSaga() {
    return yield all([
        takeLatest(FeatureTypes.REQUEST, doRequest),
    ])
}