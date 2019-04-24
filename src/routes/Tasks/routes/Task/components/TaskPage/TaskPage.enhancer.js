import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { get } from 'lodash'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { setPropTypes, setDisplayName, withProps } from 'recompose'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'
import styles from './TaskPage'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedTaskPage'),
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Add props.match
  withRouter,
  // Set proptypes of props used in HOCs
  setPropTypes({
    match: PropTypes.shape({
      params: PropTypes.shape({
        taskId: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }),
  withProps(({ match: { params: { taskId } } }) => ({
    taskId
  })),

  // Show loading spinner while project is loading
  spinnerWhileLoading(['task']),
  // Add styles as props.classes
  withStyles(styles)
)
