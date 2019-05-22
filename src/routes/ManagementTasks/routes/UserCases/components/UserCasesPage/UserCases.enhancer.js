import { compose } from 'redux'
import { connect } from 'react-redux'
import { values } from 'lodash'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import {
  setDisplayName,
  withStateHandlers,
  lifecycle,
  withState
} from 'recompose'
import { withRouter } from 'react-router-dom'
import { UserIsAuthenticated } from 'utils/router'
import styles from './UserCases.styles'
import { spinnerWhileLoading } from 'utils/components'
import { withFirebase } from 'react-redux-firebase'
import { withApi } from 'modules/api'
import axios from 'axios'
import { withNotifications } from 'modules/notification'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedUserCasesPage'),
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
  withFirebase,
  withApi,
  withNotifications,
  withState('tip', 'setTip', ''),
  lifecycle({
    componentWillMount() {
      const { fetchHistories } = this.props
      // fetchHistories()
    }
  }),
  withRouter,
  withStateHandlers(
    ({
      initialStepIndex = 0,
      initialIsFetching = false,
      initialSelecteds = [],
      specOpenInitial = false
    }) => ({
      stepIndex: initialStepIndex,
      isFetching: initialIsFetching,
      selecteds: initialSelecteds,
      specOpen: specOpenInitial
    }),
    {
      addToSelecteds: ({ selecteds }) => el => ({
        selecteds: [...selecteds, el]
      }),
      removeFromSelecteds: ({ selecteds }) => id => ({
        selecteds: selecteds.filter(el => el.p_estoria !== id)
      }),
      nextStep: ({ stepIndex, selecteds }) => () => {
        return {
          stepIndex: stepIndex + 1,
          selecteds: []
        }
      },
      prevStep: ({ stepIndex }) => () => ({
        stepIndex: stepIndex - 1,
        selecteds: []
      }),
      toggleSpec: ({ specOpen }) => option => ({
        specOpen: option
      })
    }
  ),
  withStyles(styles)
)
