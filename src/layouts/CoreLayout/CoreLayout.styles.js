export default theme => ({
    container: {
        // margin: theme.spacing.unit
        '&:before': {
            zIndex: 0,
            position: 'absolute',
            content: "''",
            width: '100%',
            height: '220px',
            backgroundColor: theme.palette.primary.main,
        }
    },
    children: {
        position: 'relative',
        zIndex: 1
    }
})
