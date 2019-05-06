import { handleActions } from 'redux-actions';
import { STEPPER_NEXT, STEPPER_BACK, SELECTEDS_ADD, SELECTEDS_REMOVE } from './actionTypes';

const defaultState = {
    stepperIndex: 0,
    selecteds: [{
        id: '0',
        selectedWord: [],
    }]
}

function nextStepperHandler(state, { payload }) {
    return {...state, stepperIndex: state.stepperIndex + 1 }
}

function backStepperHandler(state, { payload }) {
    if (state.stepperIndex === 0) {
        return state;
    }
    return {...state, stepperIndex: state.stepperIndex - 1}
}

function addSelectedsHandler(state, { payload: { id, selectedWord }}) {
    return {...state, selecteds: [...state.selecteds, {id: id, selectedWord: selectedWord}]}
}

function removeSelectedsHandler(state, { payload: { id }}){
    return {...state, selecteds: state.selecteds.filter( item=> item.id != id )}
}

export const reducer = handleActions({
    [STEPPER_NEXT]: nextStepperHandler,
    [STEPPER_BACK]: backStepperHandler,
    [SELECTEDS_ADD]: addSelectedsHandler,
    [SELECTEDS_REMOVE]: removeSelectedsHandler,
}, defaultState);
