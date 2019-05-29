export default theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  progress: {
    ...theme.flexRowCenter,
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 8
  },
  chip: {
    margin: theme.spacing.unit,
    marginLeft: 0
  },
  main: {
    ...theme.flexColumnCenter,
    padding: theme.spacing.unit * 4
  },
  statistic: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
    alignSself: 'start',
    width: '100%'
  },
  progressbar: {
    marginTop: theme.spacing.unit * 3
  },
  goBack: {
    ...theme.custom.button,
    marginTop: theme.spacing.unit * 2
  }
})
