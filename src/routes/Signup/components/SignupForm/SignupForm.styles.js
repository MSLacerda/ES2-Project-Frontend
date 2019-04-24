export default theme => ({
  root: {
    ...theme.flexColumnCenter,
    justifyContent: 'center',
    width: '100%',
    margin: '.2rem'
  },
  submit: {
    ...theme.flexColumnCenter,
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0.25rem',
    minWidth: '15rem',
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
