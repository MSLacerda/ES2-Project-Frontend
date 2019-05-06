import { createActions } from 'redux-actions';
import { STEPPER_NEXT, STEPPER_BACK, SELECTEDS_ADD, SELECTEDS_REMOVE } from './actionTypes';

export const nextStep = createActions(STEPPER_NEXT);
export const backStep = createActions(STEPPER_BACK);

export const addToSelecteds = createActions(SELECTEDS_ADD);
export const removeFromSelecteds = createActions(SELECTEDS_REMOVE);
