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

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedStepper'),
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
  // connect component with props of reducer
  connect(({ management: { stepperIndex } }) => ({
    stepperIndex
  })),
  withStateHandlers(),
  // Add styles as props.classes
  withStyles(styles)
)
