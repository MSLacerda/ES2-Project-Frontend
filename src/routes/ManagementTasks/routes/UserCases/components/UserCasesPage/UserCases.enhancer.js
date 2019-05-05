import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { get } from 'lodash'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { setDisplayName } from 'recompose'
import { UserIsAuthenticated } from 'utils/router'
import styles from './UserCases.styles'
import { spinnerWhileLoading } from 'utils/components';
import { withFirebase } from 'react-redux-firebase';

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedUserCasesPage'),
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
  withFirebase,
  // Create listeners
  firestoreConnect(() => [{
    collection: 'userCases',
  }]),
  // Map projects from state to props
  connect(({ firestore: { data }}) => ({
    userCases: data
  })),
  // Wait for uid to exist before going further
  spinnerWhileLoading(['userCases']),
  // Add props.match
  withRouter,
  // Add styles as props.classes
  withStyles(styles)
)
