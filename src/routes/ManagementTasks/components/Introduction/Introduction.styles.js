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
    description: {
        lineHeight: theme.spacing.unit * (theme.spacing.goldenRatio / 7.5),
        fontWeight: '300',
    },
    begin: {
        fontFamily: 'Product Sans Medium Regular',
        fontWeight: 'normal',
        letterSpacing: '.25px',
        textTransform: 'none',
        boxShadow: 'none',
    },
    subtitle: {
        color: theme.palette.primary.contrastText,
        paddingTop: theme.spacing.unit,
        opacity: theme.palette.primary.opacityText
    },
    main: {
        ...theme.spacing.container,
        paddingTop: theme.spacing.unit * 3
    }
})