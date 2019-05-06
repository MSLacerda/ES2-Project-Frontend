import bgImg from 'static/images/cards/project-planning.jpg'

export default theme => ({
  root: {
    ...theme.flexRowCenter,
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    fontWeight: 400,
    backgroundColor: '#fff'
  },
  rightPanel: {
    ...theme.flexColumnCenter,
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    background: `url(${bgImg}) no-repeat`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
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
