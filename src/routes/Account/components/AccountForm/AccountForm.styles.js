export default theme => ({
  root: {
    ...theme.flexColumnCenter,
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%'
  },
  fields: {
    width: '60%'
  },
  field: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3
  },
  submit: {
    ...theme.custom.button
  }
})
