// @flow
import type Action from '~/app/Types'
import update from 'immutability-helper'

export const SET_COMPANIES = 'company/SET_COMPANIES'
export const SAGA_GET_COMPANIES = 'company/SAGA_GET_COMPANIES'
export const SAGA_ADD_COMPANY = 'company/SAGA_ADD_COMPANY'
export const SAGA_COMPANY_TITLE_UPDATE = 'company/SAGA_COMPANY_TITLE_UPDATE'

const initialState = {
  companies: [],
  title: ''
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case SET_COMPANIES:
      return update(state, {companies: {$set: p.companies}})
    case SAGA_COMPANY_TITLE_UPDATE:
      return update(state, {title: {$set: p}})
    default:
      return state
  }
}
