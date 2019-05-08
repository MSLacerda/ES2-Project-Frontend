import { handleActions } from 'redux-actions'
import {
  STEPPER_NEXT,
  STEPPER_BACK,
  SELECTEDS_ADD,
  SELECTEDS_REMOVE,
  ACTUAL_ADD,
  ACTUAL_REMOVE
} from './actionTypes'

const defaultState = {
  stepperIndex: 0,
  allUseCases: [],
  actualUseCase: []
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

function addSelectedsHandler(state, { payload: { id, useCase } }) {
  return {
    ...state,
    allUseCases: [...state.allUseCases, { id: id, useCase: useCase }]
  }
}

function removeSelectedsHandler(state, { payload: { id } }) {
  return {
    ...state,
    allUseCases: state.allUseCases.filter(item => item.id != id)
  }
}

function addToActualHandler(state, { payload }) {
  return {
    ...state,
    actualUseCase: [...state.actualUseCase, payload]
  }
}

function removeFromActualHandler(state, { payload }) {
  return {
    ...state,
    actualUseCase: state.actualUseCase.filter((item, index) => index != payload)
  }
}

export const reducer = handleActions(
  {
    [STEPPER_NEXT]: nextStepperHandler,
    [STEPPER_BACK]: backStepperHandler,
    [SELECTEDS_ADD]: addSelectedsHandler,
    [SELECTEDS_REMOVE]: removeSelectedsHandler,
    [ACTUAL_ADD]: addToActualHandler,
    [ACTUAL_REMOVE]: removeFromActualHandler
  },
  defaultState
)
