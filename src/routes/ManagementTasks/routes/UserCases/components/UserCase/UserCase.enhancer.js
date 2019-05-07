import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { get } from 'lodash'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import {
  setDisplayName,
  withStateHandlers,
  setPropTypes,
  withProps
} from 'recompose'
import { UserIsAuthenticated } from 'utils/router'
import styles from './UserCase.styles'
import {
  addToActual as addToActualAction,
  removeFromActual as removeFromActualAction
} from 'routes/ManagementTasks/modules'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedUserCase'),
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Add state and state handlers as props
  setPropTypes({
    words: PropTypes.array
  }),
  withProps(({ words }) => ({
    words
  })),
  connect(
    ({ management: { actualUseCase, allUseCases } }) => ({
      actualUseCase,
      allUseCases
    }),
    dispatch => ({
      addToActual: item => dispatch(addToActualAction(item)),
      removeFromActual: index => dispatch(removeFromActualAction(index))
    })
  ),
  // Add state and state handlers as props
  withStateHandlers(
    // Setup initial state
    ({ words }) => ({
      words
    })
    // // Add state handlers as props
    // {
    //   addToNoSelected: ({ words }) => item => ({
    //     words: [...words, item]
    //   }),
    //   removeFromSelected: ({ selectedWords }) => index => ({
    //     selectedWords: selectedWords.filter((el, i) => i != index)
    //   }),
    //   removeSelected: ({ words }) => index => ({
    //     words: words.filter((el, i) => i != index)
    //   }),
    //   addSelected: ({ selectedWords }) => item => ({
    //     selectedWords: [...selectedWords, item]
    //   })
    // }
  ),
  // Add styles as props.classes
  withStyles(styles)
)
