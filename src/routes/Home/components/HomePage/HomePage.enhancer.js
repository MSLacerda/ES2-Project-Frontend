import { withStyles } from '@material-ui/core/styles'
import styles from './HomePage.styles'
import { compose, withProps, withHandlers } from 'recompose'
import { isEmpty, isLoaded } from 'react-redux-firebase/lib/helpers'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

export default compose(
  // add routes props
  withRouter,
  connect(({ firebase: { auth, profile } }) => ({
    auth,
    profile
  })),
  // add custom props
  withProps(({ auth }) => ({
    authExists: isLoaded(auth) && !isEmpty(auth)
  })),
  withHandlers({
    goTo: ({ history }) => path => {
      history.push(path)
    }
  }),
  // add classes props to component
  withStyles(styles)
)
