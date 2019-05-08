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
  withProps,
  lifecycle,
  withHandlers
} from 'recompose'
import { UserIsAuthenticated } from 'utils/router'
import styles from './UserCase.styles'
import {
  updateSelected as updateSelectedAction,
  setValidityStep as setValidityStepAction
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
    ({
      management: { actualUseCase, allUseCases, stepperIndex, stepValidity }
    }) => ({
      stepperIndex,
      actualUseCase,
      allUseCases,
      stepValidity
    }),
    dispatch => ({
      updateSelecteds: payload => dispatch(updateSelectedAction(payload)),
      setValidityStep: payload => dispatch(setValidityStepAction(payload))
    })
  ),
  // Add state and state handlers as props
  withStateHandlers(
    // Setup initial state
    ({ words }) => ({
      words
    })
  ),
  // Add styles as props.classes
  withStateHandlers(
    ({ initialWords = [] }) => ({
      selectedWords: initialWords
    }),
    {
      addWord: ({ selectedWords }) => word => ({
        selectedWords: [...selectedWords, word]
      }),
      removeWord: ({ selectedWords }) => index => ({
        selectedWords: selectedWords.filter((content, i) => index !== i)
      }),
      setSelectedWords: ({ selectedWords }) => newArray => ({
        selectedWords: newArray
      })
    }
  ),
  lifecycle({
    componentWillMount() {
      const { allUseCases, stepperIndex, setSelectedWords } = this.props
      let filtered = allUseCases.filter(item => item.id === stepperIndex)

      if (filtered.length) {
        setSelectedWords(filtered[0].useCase)
      }
    }
  }),
  withStyles(styles)
)
