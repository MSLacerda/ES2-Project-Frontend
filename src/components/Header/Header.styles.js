export default theme => ({
    header: {
        padding: theme.spacing.unit * 3,
        position: 'relative',
        zIndex: 1,
    },
    title: {
        color: theme.palette.primary.contrastText,
    },
    subtitle: {
        color: theme.palette.primary.contrastText,
        paddingTop: theme.spacing.unit,
        opacity: theme.palette.primary.opacityText
    },
})
