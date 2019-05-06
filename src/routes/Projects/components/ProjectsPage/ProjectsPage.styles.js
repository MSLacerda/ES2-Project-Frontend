export default theme => ({
  projectsWrapper: {
    flexGrow: 1,
    margin: `0 ${theme.spacing.unit * 2}px`,
    padding: `0 ${theme.spacing.unit * 3}px`,
    [theme.breakpoints.down('md')]: {
      padding: `0 ${theme.spacing.unit * 0.2}px`
    }
  },
  root: {
    flexGrow: 1
  },
  tiles: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '-webkit-flex-flow': 'column wrap'
  }
})
