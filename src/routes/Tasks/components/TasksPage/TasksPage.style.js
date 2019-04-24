export default theme => ({
  root: {
    ...theme.flexColumnCenter,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    flexGrow: '2',
    boxSizing: 'border-box',
    overflowY: 'scroll'
  },
  tiles: {
    display: 'flex',
    justifyContent: 'center',
    width: '50vw',
    flexWrap: 'wrap',
    '-webkit-flex-flow': 'column wrap'
  }
})
