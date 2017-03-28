import { put, takeEvery } from 'redux-saga/effects'
import * as api from '~/app/api'
import { SAGA_ADD_COMPANY, SET_COMPANIES } from '~/app/reducers/Company'
import { createAction } from 'redux-actions'

function* perform(_action) {
  try {
    yield api.addCompany(_action.payload)
    const companies = yield api.getCompanies()
    yield put(createAction(SET_COMPANIES)({companies}))
  } catch (err) { console.log(err) }
}

function* watch() {
  yield takeEvery(SAGA_ADD_COMPANY, perform)
}

export default watch
