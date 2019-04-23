export default theme => ({
  root: {
    display: 'flex',
  },
  details: {
    ...theme.flexColumnCenter,
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
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
