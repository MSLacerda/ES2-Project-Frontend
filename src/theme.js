export default {
  palette: {
    primary: {
      main: '#157AFB',
      contrastText: '#fff',
      opacityText: 0.7,
    },
    secondary: {
      main: '#FF7C4F',
      contrastText: '#fff',
      opacityText: 0.7,
    },
    white: {
      contrastText: '#000',
      lighter: '#F8FBFF',
      main: '#fff'
    },
    orange: {
      lighter: '#FF7C4F',
      main: '#FF7444'
    }
  },
  // Enable typography v2: https://material-ui.com/style/typography/#migration-to-typography-v2
  typography: {
    fontFamily: '"Product Sans Regular", serif',
  },
  flexColumnStart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
  },
  flexColumnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  flexRowCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexRowStart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start'
  },
  flexRowEnd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }, 
  spacing: {
    goldenRatio: 1.618,
  },
  custom: {
    button: {
      fontFamily: 'Product Sans Medium Regular',
      fontWeight: 'normal',
      letterSpacing: '.25px',
      textTransform: 'none',
      boxShadow: 'none',
    }
  }
}
