export default theme => ({
  root: {
    ...theme.flexRowCenter
  },
  rightPanel: {
    ...theme.flexColumnCenter,
    width: '100%',
    justifyContent: 'center',
    margin: '.3rem',
    alignItems: 'center'
  },
  leftPanel: {
    ...theme.flexColumnCenter,
    justifyContent: 'center',
    width: '100%',
    margin: '.3rem'
  },
  orLabel: {
    marginTop: '1rem',
    marginBottom: '.5rem'
  },
  signup: {
    ...theme.flexColumnCenter,
    justifyContent: 'center',
    marginTop: '0.5rem'
  },
  loginLabel: {
    margin: '0.9rem',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  signupLink: {
    fontSize: '1.2rem'
  },
  providers: {
    marginTop: '1rem'
  }
})
