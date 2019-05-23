export default theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  progress: {
    ...theme.flexRowCenter,
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 8
  },
  main: {
    ...theme.flexColumnCenter,
    padding: theme.spacing.unit
  },
  diagram: {
    height: 'auto',
    width: '100%',
    padding: theme.spacing.unit * 5
  },
  questions: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  },
  prev: {
    ...theme.custom.button,
    marginLeft: theme.spacing.unit * 2
  },
  next: {
    ...theme.custom.button
  },
  question: {
    padding: theme.spacing.unit * 3,
    borderBottom: `1px solid ${theme.palette.secondary.main}`
  },
  control: {
    ...theme.flexRowStart,
    width: '100%',
    padding: theme.spacing.unit * 3
  }
})
