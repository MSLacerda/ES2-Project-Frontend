import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { get } from 'lodash'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { setDisplayName, withStateHandlers } from 'recompose'
import { UserIsAuthenticated } from 'utils/router'
import styles from './Stepper.styles'
import {
  addToSelecteds as addToSelectedsAction,
  removeFromSelecteds as removeFromSelectedsAction
} from 'routes/ManagementTasks/modules'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedStepper'),
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
  // connect component with props of reducer
  connect(({ management: { stepperIndex, actualUseCase, allUseCases } }) => ({
    stepperIndex,
    actualUseCase,
    allUseCases
  }),
    dispatch => ({
      addToSelecteds: (id, useCase) => addToSelectedsAction({ id, useCase }),
      removeFromSelecteds: (id, useCase) => removeFromSelectedsAction({ id, useCase }),
    })
  ),
  withStateHandlers(),
  // Add styles as props.classes
  withStyles(styles)
)
