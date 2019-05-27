// import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
// import { values } from 'lodash'
// import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import {
  setDisplayName,
  lifecycle,
  withStateHandlers,
  withHandlers
} from 'recompose'
import { UserIsAuthenticated } from 'utils/router'
import styles from './DiagramsPage.styles'
import { spinnerWhileLoading } from 'utils/components'
import { withFirebase, firestoreConnect } from 'react-redux-firebase'
import { withApi } from 'modules/api'
import { findIndex } from 'lodash'
import { withNotifications } from 'modules/notification'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedDiagramsPage'),
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
  withNotifications,
  withFirebase,
  withApi,
  // Add props.match
  withRouter,
  // lifecycles
  lifecycle({
    componentWillMount() {
      const { fetchUseCases } = this.props

      fetchUseCases()
    }
  }),
  // Map projects from state to props
  connect(({ api: { diagrams: { data } } }) => ({
    diagrams: data
  })),
  // Wait for uid to exist before going further
  spinnerWhileLoading(['diagrams']),
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
  withStateHandlers(
    ({ initialIndex = 0, initialRelations = [], initialFinished = false }) => ({
      index: initialIndex,
      relations: initialRelations,
      finished: initialFinished
    }),
    {
      nextStep: ({ index }) => limit => ({
        index: index > limit ? index : index + 1
      }),
      prevStep: ({ index }) => () => ({
        index: index <= 0 ? index : index - 1
      }),
      setIndex: ({ index }) => i => ({
        index: i
      }),
      setFinished: ({ finished, index, relations }) => option => ({
        finished: option,
        index: option ? index : 0,
        relations: option ? relations : []
      }),
      setRelation: ({ relations }) => (id, userId) => {
        const index = findIndex(relations, { codigo: id })

        if (index === -1) {
          return {
            relations: [...relations, { codigo: id, codigo_usuario: userId }]
          }
        }

        // Alterando o elemento do array
        relations.splice(index, 1, {
          codigo: id,
          codigo_usuario: userId
        })

        return {
          relations
        }
      }
    }
  ),
  withHandlers({
    setProgress: props => (data, id, hasToReset) => {
      const { uid, setFinished, firestore, showError } = props

      return firestore
        .update(`progress/${id}`, data)
        .then(() => {
          if (hasToReset) setFinished(false)
        })
        .catch(err => {
          console.log(err)
          showError('Impossível atualizar o seu perfil de atividades')
        })
    }
  }),
  // Add styles as props.classes
  withStyles(styles)
)
