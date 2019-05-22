import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  setDisplayName,
  withStateHandlers,
  setPropTypes,
  withProps,
  lifecycle,
  withHandlers,
  withState
} from 'recompose'
import { UserIsAuthenticated } from 'utils/router'
import styles from './UserCase.styles'
import {
  updateSelected as updateSelectedAction,
  setValidityStep as setValidityStepAction
} from 'routes/ManagementTasks/modules'
import { withApi } from 'modules/api'
import { spinnerWhileLoading } from 'utils/components'

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedUserCase'),
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Add state and state handlers as props
  withApi,
  setPropTypes({
    index: PropTypes.number
  }),
  lifecycle({
    componentWillMount() {
      const { fetchHistories, index } = this.props

      fetchHistories(index)
    }
  }),
  withProps(({ index }) => ({
    index
  })),
  connect(
    ({
      api: {
        histories: { data }
      }
    }) => ({
      story: data
    }),
    dispatch => ({
      updateSelecteds: payload => dispatch(updateSelectedAction(payload)),
      setValidityStep: payload => dispatch(setValidityStepAction(payload))
    })
  ),
  // Wait for uid to exist before going further
  spinnerWhileLoading(['story']),
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
  withStyles(styles)
)
