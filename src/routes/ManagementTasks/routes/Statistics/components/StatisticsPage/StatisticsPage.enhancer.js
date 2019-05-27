import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { setDisplayName } from 'recompose'
import styles from './StatisticsPage.styles'
import { firebaseConnect } from 'react-redux-firebase';

export default compose(
  // Map auth uid from state to props
  connect(({ firebase: { auth: { uid } } }) => ({ uid })),
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
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedStatisticsPage'),
  withStyles(styles)
)
