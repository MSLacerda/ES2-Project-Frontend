import { compose } from 'redux'
import { connect } from 'react-redux'
import { withHandlers, withStateHandlers, setDisplayName } from 'recompose'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { withNotifications } from 'modules/notification'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'
import styles from './Introduction.styles'
import { MANAGEMENT_PATH } from 'constants/paths';

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedTasksPage'),
  // redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Add router props
  withRouter,
  // Map auth uid from state to props
  connect(({ firebase: { auth: { uid } } }) => ({ uid })),
  // Wait for uid to exist before going further
  spinnerWhileLoading(['uid']),
  // Create listeners based on current users UID
  // Map projects from state to props
  connect(({ firestore: { ordered } }) => ({
    projects: ordered.projects
  })),
  // Show loading spinner while projects and collabProjects are loading
  spinnerWhileLoading(['projects']),
  // Add props.showError and props.showSuccess
  withNotifications,
  // Add state and state handlers as props
  withStateHandlers(
    // Setup initial state
    ({ initialDialogOpen = false }) => ({
      newDialogOpen: initialDialogOpen
    }),
    // Add state handlers as props
    {
      toggleDialog: ({ newDialogOpen }) => () => ({
        newDialogOpen: !newDialogOpen
      })
    }
  ),
  withHandlers({
    goToUserCases: ({ history }) => () => {
      console.log(history);
      history.push(`${MANAGEMENT_PATH}/user-cases`);
    },
  }),
  // Add styles as props.classes
  withStyles(styles)
)