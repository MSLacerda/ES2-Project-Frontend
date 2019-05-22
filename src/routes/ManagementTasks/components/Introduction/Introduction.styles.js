export default theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    padding: theme.spacing.unit * 3,
    backgroundColor: theme.palette.primary.main
  },
  title: {
    color: theme.palette.primary.contrastText
  },
  description: {
    lineHeight: theme.spacing.unit * (theme.spacing.goldenRatio / 7.5),
    fontWeight: '300'
  },
  begin: {
    ...theme.custom.button,
    marginTop: theme.spacing.unit * 2
  },
  subtitle: {
    color: theme.palette.primary.contrastText,
    paddingTop: theme.spacing.unit,
    opacity: theme.palette.primary.opacityText
  },
  spec: {
    ...theme.custom.button,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  main: {
    ...theme.spacing.container,
    paddingTop: theme.spacing.unit * 3
  }
})
