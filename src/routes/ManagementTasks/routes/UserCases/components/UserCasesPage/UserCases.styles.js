export default theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  caseTitle: {
    padding: theme.spacing.unit * 2
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  spec: {
    ...theme.custom.button,
    margin: theme.spacing.unit * 2
  },
  next: {
    ...theme.custom.button
  },
  prev: {
    ...theme.custom.button,
    marginLeft: theme.spacing.unit
  },
  progress: {
    ...theme.flexRowCenter,
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 8
  },
  hints: {
    padding: theme.spacing.unit * 2
  },
  hint: {
    padding: theme.spacing.unit * 2
  },
  questions: {
    borderBottom: `1px solid ${theme.palette.secondary.main}`
  }
})
