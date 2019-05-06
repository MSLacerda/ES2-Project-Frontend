import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { get } from 'lodash'
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { setDisplayName, withStateHandlers, setPropTypes, withProps } from 'recompose'
import { UserIsAuthenticated } from 'utils/router'
import styles from './UserCase.styles'
import { addToSelecteds } from 'routes/ManagementTasks/modules';

export default compose(
  // Set component display name (more clear in dev/error tools)
  setDisplayName('EnhancedUserCase'),
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Add state and state handlers as props
  setPropTypes({
    words: PropTypes.array,
  }),
  withProps(({ words }) => ({
    words
  })),
  connect(({ management: { selecteds } }) => ({
    selecteds
  }),
    dispatch => ({
      addToSelecteds: item => dispatch(addToSelecteds(item))
    })
  ),
  // Add state and state handlers as props
  withStateHandlers(
    // Setup initial state
    ({ initialSelectedWords = [], words }) => ({
      selectedWords: initialSelectedWords,
      words,
    }),
    // Add state handlers as props
    {
      addToNoSelected: ({ words }) => (item) => ({
        words: [...words, item],
      }),
      removeFromSelected: ({ selectedWords }) => (index) => ({
        selectedWords: selectedWords.filter((el, i) => i != index)
      }),
      removeSelected: ({ words }) => (index) => ({
        words: words.filter((el, i) => i != index)
      }),
      addSelected: ({ selectedWords }) => (item) => ({
        selectedWords: [...selectedWords, item]
      }),
    }
  ),
  // Add styles as props.classes
  withStyles(styles)
)
