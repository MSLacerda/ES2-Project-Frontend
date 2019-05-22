import { combineReducers } from 'redux'
import { without, omit } from 'lodash'
import {
  API_DIAGRAMS_REQUEST,
  API_DIAGRAMS_RECEIVE,
  API_HISTORIES_REQUEST,
  API_HISTORIES_RECEIVE
} from './actionTypes'

const diagrams = (state = {}, action) => {
  switch (action.type) {
    case API_DIAGRAMS_REQUEST:
      return {
        ...state,
        pending: true
      }
    case API_DIAGRAMS_RECEIVE:
      return {
        ...state,
        data: action.payload.data,
        pending: false
      }
    default:
      return state
  }
}

const histories = (state = {}, action) => {
  switch (action.type) {
    case API_HISTORIES_REQUEST:
      return {
        ...state,
        pending: true
      }
    case API_HISTORIES_RECEIVE:
      return {
        ...state,
        data: action.payload.data,
        pending: false
      }
    default:
      return state
  }
}

export const api = combineReducers({ diagrams, histories })

export default api
