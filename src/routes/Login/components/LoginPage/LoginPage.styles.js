export default theme => ({
  root: {
    ...theme.flexRowCenter,
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    fontWeight: 400,
    padding: '0.5rem'
  },
  rightPanel: {
    ...theme.flexColumnCenter,
    width: '100%',
    margin: '.3rem',
    alignItems: 'center',
    
  },
  leftPanel: {
    ...theme.flexColumnCenter,
    width: '100%',
    margin: '.3rem',
  }
})
