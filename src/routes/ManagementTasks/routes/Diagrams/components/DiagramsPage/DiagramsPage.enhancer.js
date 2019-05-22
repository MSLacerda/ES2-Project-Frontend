// import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
// import { values } from 'lodash'
// import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { setDisplayName, lifecycle, withStateHandlers } from 'recompose'
import { UserIsAuthenticated } from 'utils/router'
import styles from './DiagramsPage.styles'
import { spinnerWhileLoading } from 'utils/components'
import { withFirebase } from 'react-redux-firebase'
import { withApi } from 'modules/api'
import { findIndex } from 'lodash'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedDiagramsPage'),
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
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

  withStateHandlers(
    ({ initialIndex = 0, initialRelations = [] }) => ({
      index: initialIndex,
      relations: initialRelations
    }),
    {
      nextStep: ({ index }) => limit => ({
        index: index > limit ? index : index + 1
      }),
      prevStep: ({ index }) => () => ({
        index: index <= 0 ? index : index + 1
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
  // Add styles as props.classes
  withStyles(styles)
)
