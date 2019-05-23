import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  withHandlers,
  withStateHandlers,
  setDisplayName,
  lifecycle
} from 'recompose'
import { withRouter } from 'react-router-dom'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withNotifications } from 'modules/notification'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'
import styles from './ManagementTasksPage.styles'

export default compose(
  // redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedTasksPage'),
  // Map auth uid from state to props
  connect(({ firebase: { auth: { uid } } }) => ({ uid })),
  // Wait for uid to exist before going further
  spinnerWhileLoading(['uid']),
  // Create listeners based on current users UID
  firestoreConnect(({ uid }) => [
    // Listener for progress the current user created
    {
      collection: 'progress',
      where: ['createdBy', '==', uid]
    }
  ]),
  // Map projects from state to props
  connect(({ firestore: { ordered } }) => ({
    progress: ordered.progress
  })),
  // Wait for uid to exist before going further
  spinnerWhileLoading(['progress']),
  // Add props.router
  withRouter,
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
    getProgress: props => () => {},
    createProgress: props => () => {
      const { firestore, uid, showError, showSuccess } = props
      if (!uid) {
        return showError('You must be logged in to create a project')
      }
      return firestore
        .add(
          { collection: 'progress' },
          {
            coding: false,
            createdBy: uid,
            stories: false,
            usecases: false,
            createdAt: firestore.FieldValue.serverTimestamp(),
            storyStep: 0
          }
        )
        .then(() => {
          showSuccess('Perfil de atividades criado')
        })
        .catch(err => {
          console.error('Error:', err) // eslint-disable-line no-console
          showError(err.message || 'Could not add project')
          return Promise.reject(err)
        })
    }
  }),
  lifecycle({
    componentWillMount() {
      const { progress, createProgress } = this.props
      if (!progress[0]) {
        createProgress()
      }
    }
  }),
  // Add styles as props.classes
  withStyles(styles)
)
