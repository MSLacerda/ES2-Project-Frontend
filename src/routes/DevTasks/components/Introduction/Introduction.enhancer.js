import { compose } from 'redux'
import { connect } from 'react-redux'
import { withHandlers, withStateHandlers, setDisplayName } from 'recompose'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { withNotifications } from 'modules/notification'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'
import styles from './Introduction.styles'
import { DEV_PATH } from 'constants/paths'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedTasksPage'),
  // redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Add router props
  withRouter,
  // Add props.showError and props.showSuccess
  withNotifications,
  withHandlers({
    goToUserCases: ({ history }) => () => {
      history.push(`${DEV_PATH}/code`)
    }
  }),
  // Add styles as props.classes
  withStyles(styles)
)
