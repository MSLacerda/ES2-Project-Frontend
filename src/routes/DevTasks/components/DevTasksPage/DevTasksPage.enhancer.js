import { compose } from 'redux'
import { setDisplayName } from 'recompose'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { withNotifications } from 'modules/notification'
import { UserIsAuthenticated } from 'utils/router'
import styles from './DevTasksPage.styles'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedDevTasksPage'),
  // redirect to /login if user is not logged in
  UserIsAuthenticated,
  // add router props
  withRouter,
  // Add props.router
  withRouter,
  // Add props.showError and props.showSuccess
  withNotifications,
  // Add styles as props.classes
  withStyles(styles)
)
