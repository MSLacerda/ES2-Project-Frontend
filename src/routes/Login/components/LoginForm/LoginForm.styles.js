export default theme => ({
  root: {
    ...theme.flexColumnCenter,
    justifyContent: 'center',
    flexGrow: 1,
    height: '100%',
    width: '100%',
    margin: '.2rem'
  },
  submit: {
    ...theme.flexColumnCenter,
    justifyContent: 'center',
    textAlign: 'center',
    padding: '1.25rem',
    minWidth: '192px',
    marginTop: '1.5rem'
  },
  header: {
    textAlign: 'center',
    color: theme.palette.primary.main
  },
  input: {
    marginTop: '1rem'
  }
})
