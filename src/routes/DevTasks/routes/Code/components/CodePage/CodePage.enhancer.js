import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { values } from 'lodash'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { setDisplayName, withStateHandlers } from 'recompose'
import { UserIsAuthenticated } from 'utils/router'
import styles from './CodePage.styles'
import { spinnerWhileLoading } from 'utils/components'
import { withFirebase } from 'react-redux-firebase'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedCodePagePage'),
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Add props.match
  withRouter,
  withStateHandlers(
    // Setup initial state
    ({ codeInitial = '' }) => ({
      code: codeInitial
    })
  ),
  // Add styles as props.classes
  withStyles(styles)
)
