export default theme => ({
    root: {
      flexGrow: 1,
    },
    header: {
      padding: theme.spacing.unit * 3,
      backgroundColor: theme.palette.primary.main
    },
    title: {
      color: theme.palette.primary.contrastText,      
    },
    subtitle: {
      color: theme.palette.primary.contrastText,
      paddingTop: theme.spacing.unit,
      opacity: theme.palette.primary.opacityText
    },
    main: {
      padding: theme.spacing.unit * 3
    }
  })
  