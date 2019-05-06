import { grey } from '@material-ui/core/colors'

export default theme => ({
  root: {
    padding: theme.spacing.unit * 2
    // empty
  },
  progress: {
    ...theme.flexRowCenter,
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 8
  },
  controller: {
    marginTop: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    '& > button': {
      marginRight: theme.spacing.unit
    }
  },
  next: {
    ...theme.custom.button
  },
  back: {
    textTransform: 'none'
  }
})
