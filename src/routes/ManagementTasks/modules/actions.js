import { createActions, createAction } from 'redux-actions'
import {
  STEPPER_NEXT,
  STEPPER_BACK,
  SELECTEDS_ADD,
  SELECTEDS_REMOVE,
  ACTUAL_ADD,
  ACTUAL_REMOVE
} from './actionTypes'

export const nextStep = createAction(STEPPER_NEXT)
export const prevStep = createAction(STEPPER_BACK)

export const addToSelecteds = createAction(SELECTEDS_ADD)
export const removeFromSelecteds = createAction(SELECTEDS_REMOVE)

export const addToActual = createAction(ACTUAL_ADD)
export const removeFromActual = createAction(ACTUAL_REMOVE)
