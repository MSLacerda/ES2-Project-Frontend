import { handleActions } from 'redux-actions'
import {
  STEPPER_NEXT,
  STEPPER_BACK,
  UPDATE_SELECTEDS,
  STEP_VALIDITY_SET
} from './actionTypes'

const defaultState = {
  stepperIndex: 0,
  allUseCases: [],
  stepValidity: {
    validity: false
  }
}

function nextStepperHandler(state, { payload }) {
  return { ...state, stepperIndex: state.stepperIndex + 1, actualUseCase: [] }
}

function backStepperHandler(state, { payload }) {
  if (state.stepperIndex === 0) {
    return state
  }
  return { ...state, stepperIndex: state.stepperIndex - 1, actualUseCase: [] }
}

function setStepValidty(state, payload) {
  console.log(payload)
  return { ...state, stepValidity: { validity: payload.validity }
}

function updateSelectedsHandler(state, { payload: { id, useCase } }) {
  if (state.allUseCases.length) {
    return {
      ...state,
      allUseCases: state.allUseCases.map(content => {
        // Replace if the useCase already exists
        if (content.id == id) {
          return { id: id, useCase: useCase }
        }
        return content
      })
    }
  }

  return {
    ...state,
    allUseCases: [...state.allUseCases, { id, useCase }]
  }
}

export const reducer = handleActions(
  {
    [STEPPER_NEXT]: nextStepperHandler,
    [STEPPER_BACK]: backStepperHandler,
    [UPDATE_SELECTEDS]: updateSelectedsHandler,
    [STEP_VALIDITY_SET]: setStepValidty
  },
  defaultState
)
