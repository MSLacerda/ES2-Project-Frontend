import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { get } from 'lodash'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { setDisplayName, withStateHandlers, lifecycle } from 'recompose'
import { UserIsAuthenticated } from 'utils/router'
import styles from './Stepper.styles'
import {
  updateSelected as updateSelectedAction,
  nextStep as nextStepAction,
  prevStep as prevStepAction
} from 'routes/ManagementTasks/modules'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedStepper'),
  // add router props to compoment
  withRouter,
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
  // connect component with props of reducer
  connect(
    ({
      management: { stepperIndex, actualUseCase, allUseCases, stepValidity }
    }) => ({
      stepperIndex,
      actualUseCase,
      allUseCases,
      stepValidity
    }),
    dispatch => ({
      addToSelecteds: (id, useCase) =>
        dispatch(updateSelectedAction({ id, useCase })),
      nextStep: () => dispatch(nextStepAction()),
      prevStep: () => dispatch(prevStepAction())
    })
  ),
  lifecycle({
    componentWillMount() {
      console.log('component will mount -> ', this.props.stepperIndex)
    }
  }),
  // withStateHandlers(
  //   ({ initialValue = false }) => ({
  //     isStepValid: initialValue
  //   }),
  //   {
  //     setStepValidty: ({ isStepValid }) => validity => ({
  //       isStepValid: validity
  //     })
  //   }
  // ),
  // Add styles as props.classes
  withStyles(styles)
)
