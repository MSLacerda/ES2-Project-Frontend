import { createAction } from 'redux-actions'
import {
  STEPPER_NEXT,
  STEPPER_BACK,
  UPDATE_SELECTEDS,
  STEP_VALIDITY_SET
} from './actionTypes'

export const nextStep = createAction(STEPPER_NEXT)
export const prevStep = createAction(STEPPER_BACK)

export const updateSelected = createAction(UPDATE_SELECTEDS)

export const setValidityStep = createAction(STEP_VALIDITY_SET)
