export default theme => ({
  root: {
    marginBottom: theme.spacing.unit * 4
  },
  details: {
    ...theme.flexColumnCenter
  },
  chip: {
    margin: theme.spacing.unit,
    marginLeft: 0
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  cover: {
    width: 300
  },
  content: {
    flex: '1 0 auto'
  },
  cardTitle: {
    fontWeight: 'bold'
  },
  projectDescription: {
    // fontSize: '1rem',
    opacity: theme.palette.primary.opacityText
  },
  openWrapper: {
    paddingTop: theme.spacing.unit * 1
  },
  name: {
    fontSize: '1.5rem',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 800ms cubic-bezier(0.25,0.1,0.25,1) 0ms',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    ':hover': {
      color: ''
    },
    ':visited': {
      textDecoration: 'none'
    }
  }
})
