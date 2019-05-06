export default theme => ({
  root: {
    flexGrow: 1
  },
  main: {
    flexGrow: 1,
    margin: `0 ${theme.spacing.unit * 2}px`,
    padding: `0 ${theme.spacing.unit * 3}px`,
    [theme.breakpoints.down('md')]: {
      padding: `0 ${theme.spacing.unit * 0.2}px`
    }
  },
  introduction: {
    padding: theme.spacing.unit * 3
  }
})
