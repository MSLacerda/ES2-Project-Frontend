import bgImg from 'static/images/bg/home.png'

export default theme => ({
  root: {
    ...theme.flexRowStart,
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    padding: `0px ${theme.spacing.unit * 4}px`,
    height: '100vh',
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: '-4rem 35rem',
    [theme.breakpoints.up('sm')]: {
      backgroundPosition: '-4rem 36rem',
    },    
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: '-4rem 32rem',
      backgroundSize: '15rem',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: '-4rem 32rem',
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: '30rem 8rem',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundPosition: '37rem 2rem',
      backgroundSize: '34rem'
    }
   },
  hero: {
    color: theme.palette.primary.contrastText,
  },
  description: {
    color: theme.palette.primary.contrastText,
    opacity: theme.palette.primary.opacityText
  },
  buttons: {
    paddingTop: theme.spacing.unit * 2,
    wordBreak: 'break-line',
  },
  login: {
    boxShadow: 'none',
    marginRight: theme.spacing.unit,
    backgroundColor: theme.palette.orange.main,
    '&:hover': {
      backgroundColor: theme.palette.orange.lighter,
    }
  },
  signup: {
    borderColor: theme.palette.white.main,
    color: theme.palette.white.main,
    '&:hover': {
      backgroundColor: theme.palette.white.lighter,
      color:theme.palette.white.contrastText

    }
  }
})
