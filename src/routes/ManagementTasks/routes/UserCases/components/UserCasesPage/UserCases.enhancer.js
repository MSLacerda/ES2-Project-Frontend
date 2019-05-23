import { compose } from 'redux'
import { connect } from 'react-redux'
import { values } from 'lodash'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import {
  setDisplayName,
  withStateHandlers,
  lifecycle,
  withState,
  withHandlers
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
  withRouter,
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
  withState('tip', 'setTip', ''),
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
      }),
      setStepIndex: ({ stepIndex }) => index => ({
        stepIndex: index
      })
    }
  ),
  withHandlers({
    setProgress: props => (data, id, hasToSetIndex) => {
      const { uid, setStepIndex, firestore, showError } = props

      return firestore
        .update(`progress/${id}`, data)
        .then(() => {
          if (hasToSetIndex) setStepIndex(data.storyStep)
        })
        .catch(err => {
          console.log(err)
          showError('Impossível atualizar o seu perfil de atividades')
        })
    }
  }),
  withStyles(styles)
)
