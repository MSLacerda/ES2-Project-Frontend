import axios from 'axios'
import {
  API_DIAGRAMS_RECEIVE,
  API_DIAGRAMS_REQUEST,
  API_HISTORIES_REQUEST,
  API_HISTORIES_RECEIVE
} from './actionTypes'
import endpoints from 'constants/api'

function requestDiagrams() {
  return {
    type: API_DIAGRAMS_REQUEST
  }
}

function receiveDiagrams(data) {
  return {
    type: API_DIAGRAMS_RECEIVE,
    payload: data
  }
}

function requestHistories() {
  return {
    type: API_HISTORIES_REQUEST
  }
}

function receiveHistories(data) {
  return {
    type: API_HISTORIES_RECEIVE,
    payload: data
  }
}

export function fetchUseCases() {
  return dispatch => {
    dispatch(requestDiagrams())

    return axios
      .get(endpoints.diagramUrl + '/1')
      .then(response => dispatch(receiveDiagrams(response)))
  }
}

export function fetchHistories(index) {
  return dispatch => {
    dispatch(requestHistories())

    return axios
      .get(`${endpoints.historiesUrl}/${++index}`)
      .then(response => dispatch(receiveHistories(response)))
  }
}
