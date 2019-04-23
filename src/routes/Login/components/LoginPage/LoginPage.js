import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import Paper from '@material-ui/core/Paper'
import { SIGNUP_PATH } from 'constants/paths'
import LoginForm from '../LoginForm'

function LoginPage({ emailLogin, googleLogin, onSubmitFail, classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.leftPanel}>
        <LoginForm onSubmit={emailLogin} onSubmitFail={onSubmitFail} />
        <div className={classes.orLabel}>ou</div>
        <div className={classes.providers}>
          <GoogleButton type="light" label="Login com o Google" onClick={googleLogin} />
        </div>
        <div className={classes.signup}>
          <span className={classes.loginLabel}> precisa de uma conta?</span>
          <Link className={classes.signupLink} to={SIGNUP_PATH}>
            Cadastre-se
          </Link>
        </div>
      </div>
      <div className={classes.rightPanel}>
        test
      </div>
    </div>
  );
  // return (
  //   <div className={classes.root}>
  //     <Paper className={classes.panel}>
  //       <LoginForm onSubmit={emailLogin} onSubmitFail={onSubmitFail} />
  //     </Paper>
  //     <div className={classes.orLabel}>or</div>
  //     <div className={classes.providers}>
  //       <GoogleButton onClick={googleLogin} />
  //     </div>
  //     <div className={classes.signup}>
  //       <span className={classes.signupLabel}>Need an account?</span>
  //       <Link className={classes.signupLink} to={SIGNUP_PATH}>
  //         Sign Up
  //       </Link>
  //     </div>
  //   </div>
  // )
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  emailLogin: PropTypes.func.isRequired, // from enhancer (withHandlers)
  onSubmitFail: PropTypes.func.isRequired, // from enhancer (withHandlers)
  googleLogin: PropTypes.func.isRequired // from enhancer (withHandlers)
}

export default LoginPage
